import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import { useDebounce } from "./hooks/useDebounce";

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

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);
  const [traitFilters, setTraitFilters] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

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

  const filteredHouses = houses.filter((house) =>
    debouncedSearch.length < 3
      ? true
      : house.name.toLowerCase().includes(debouncedSearch.toLowerCase())
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
    <div className="min-h-screen p-8 font-sans bg-white text-black flex flex-col items-center">
      <div className="relative w-full max-w-xs mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search houses"
          className="p-2 border border-gray-300 rounded w-full pr-8" // pr-8 for the X space
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
        {filteredHouses.map((house) => {
          const traitSearch = traitFilters[house.id] || "";
          const visibleTraits = house.traits.filter((trait) =>
            trait.name.toLowerCase().includes(traitSearch.toLowerCase())
          );

          return (
            <div
              key={house.id}
              className="border border-gray-300 rounded p-4 shadow w-full max-w-xl"
            >
              <div className="text-xl font-bold flex justify-between">
                <span>{house.name}</span>
                <span>{house.animal}</span>
              </div>
              <div
                className="h-4 my-2 rounded"
                style={{
                  background: house.houseColours
                    ? `linear-gradient(to right, ${house.houseColours})`
                    : `linear-gradient(to right, white, black)`,
                }}
              ></div>
              <p className="text-sm mb-2">
                Founder: <span className="font-semibold">{house.founder}</span>
              </p>
              <input
                type="text"
                placeholder="Filter traits..."
                value={traitSearch}
                onChange={(e) => handleTraitChange(house.id, e.target.value)}
                className="mb-2 p-1 border border-gray-300 rounded w-full text-sm"
              />
              <ul className="text-sm mt-2 list-disc list-inside">
                {visibleTraits.map((trait) => (
                  <li key={trait.id}>{trait.name}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
