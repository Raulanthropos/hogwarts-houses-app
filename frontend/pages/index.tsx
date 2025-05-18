import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useDebounce } from "../hooks/useDebounce";
import Pagination from "../components/Pagination";

type Trait = {
  id: string;
  name: string;
};

type House = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  traits: Trait[];
};

// CSS color validation function
function isValidCssColor(str: string): boolean {
  const s = document.createElement("span").style;
  s.color = str;
  return !!s.color;
}

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);
  const [traitFilters, setTraitFilters] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [housesPerPage] = useState<number>(4);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://hogwarts-houses-app-production.up.railway.app/houses"
        );
        const data: House[] = await res.json();
        const processed = data.map((house) => ({
          ...house,
          houseColours: house.houseColours
            .split("and")
            .map((color) => color.trim())
            .join(", "),
        }));
        setHouses(processed);
      } catch (err) {
        console.error("Failed to fetch houses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const filteredHouses = houses.filter((house) =>
    debouncedSearch.length < 3
      ? true
      : house.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filteredHouses.length / housesPerPage);
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = filteredHouses.slice(
    indexOfFirstHouse,
    indexOfLastHouse
  );

  const handleTraitChange = (houseId: string, value: string) => {
    setTraitFilters((prev) => ({ ...prev, [houseId]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen p-8 font-sans bg-white text-black flex flex-col items-center">
        <div className="w-full max-w-md flex flex-col items-start">
          <div className="relative max-w-md mb-8 flex items-start">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search houses"
              className="p-2 border border-gray-300 rounded w-full pr-8"
            />
            {search && (
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer select-none text-gray-400 text-lg"
                onClick={() => setSearch("")}
                role="button"
                tabIndex={0}
                aria-label="Clear search"
              >
                ×
              </span>
            )}
          </div>
          <div className="flex flex-col items-center gap-8 w-full">
            {currentHouses.map((house) => {
              const traitSearch = traitFilters[house.id] || "";
              const visibleTraits = house.traits.filter((trait) =>
                trait.name.toLowerCase().includes(traitSearch.toLowerCase())
              );
              const colorList = house.houseColours
                .split(",")
                .map((c) => c.trim().toLowerCase())
                .filter(Boolean);
              const allValid =
                colorList.length >= 2 && colorList.every(isValidCssColor);

              const gradient = allValid
                ? `linear-gradient(to right, ${colorList.join(", ")})`
                : `linear-gradient(to right, white, black)`;

              return (
                <div
                  key={house.id}
                  className="border border-gray-300 rounded-lg py-4 px-2 shadow w-full"
                >
                  <div className="mx-1">
                    <div className="text-xl font-bold flex justify-between">
                      <span>{house.name}</span>
                      <span className="text-sm font-normal text-black">
                        {house.animal}
                      </span>
                    </div>
                    <div
                      className="h-4 my-2 rounded"
                      style={{ background: gradient }}
                    ></div>
                  </div>
                  <p className="text-sm mb-2">
                    Founder: <span className="font-bold">{house.founder}</span>
                  </p>
                  <div className="relative max-w-xs mb-2">
                    <input
                      type="text"
                      placeholder="Search house traits"
                      value={traitSearch}
                      onChange={(e) =>
                        handleTraitChange(house.id, e.target.value)
                      }
                      className="p-1 border border-gray-300 rounded w-full pr-7 text-sm"
                    />
                    {traitSearch && (
                      <span
                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer select-none text-gray-400 text-base"
                        onClick={() => handleTraitChange(house.id, "")}
                        role="button"
                        tabIndex={0}
                        aria-label="Clear trait filter"
                      >
                        ×
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {visibleTraits.map((trait) => (
                      <span
                        key={trait.id}
                        className="bg-gray-800 text-white border-gray-300 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
                      >
                        {trait.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {filteredHouses.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}
