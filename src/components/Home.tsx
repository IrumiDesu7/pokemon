import { useState } from "react";
import { usePokemonList } from "../lib/use-pokemon";
import { Card } from "./ui/card";
import SearchBar from "./ui/SearchBar";
import usePokemonStore from "../store/pokemon-store";
import { Sort } from "./ui/Sort";

export const Home = () => {
  const [query, setQuery] = useState("");

  const { data: pokemonLists, isLoading } = usePokemonList();

  const { sort } = usePokemonStore();

  const data = pokemonLists?.results;

  const filteredData = data?.filter((d) => d.name.includes(query));

  const sortedData = filteredData?.sort((a, b) => {
    if (sort === "asc") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Pokemon List</h1>
        <div className="flex items-center">
          <SearchBar query={query} setQuery={setQuery} />
          <Sort />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {sortedData?.map((d) => (
          <Card key={d.name} name={d.name} url={d.url} />
        ))}
      </div>
    </div>
  );
};
