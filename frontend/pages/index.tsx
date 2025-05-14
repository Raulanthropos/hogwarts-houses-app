import { useEffect, useState } from "react";

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
  const [search, setSearch] = useState("");
  const [traitFilters, setTraitFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchHouses = async () => {
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
      }
    };

    fetchHouses();
  }, []);

  const handleTraitChange = (houseId: string, value: string) => {
    setTraitFilters((prev) => ({ ...prev, [houseId]: value }));
  };

  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 font-sans bg-white text-black flex flex-col items-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search houses"
        className="mb-8 p-2 border border-gray-300 rounded w-full max-w-xs"
      />
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
