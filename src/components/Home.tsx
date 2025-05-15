import { useEffect, useMemo, useState } from "react";
import { usePokemonList } from "../lib/use-pokemon";
import usePokemonStore from "../store/pokemon-store";
import { Card } from "./ui/Card";
import { Pagination } from "./ui/Pagination";
import SearchBar from "./ui/SearchBar";
import { Sort } from "./ui/Sort";

export const Home = () => {
  const [query, setQuery] = useState("");
  const {
    sort,
    currentPage,
    itemsPerPage,
    totalItems,
    setCurrentPage,
    setTotalItems,
  } = usePokemonStore();

  const offset = (currentPage - 1) * itemsPerPage;

  const { data: pokemonLists, isLoading } = usePokemonList(
    itemsPerPage,
    offset
  );

  useEffect(() => {
    if (pokemonLists?.count) {
      setTotalItems(pokemonLists.count);
    }
  }, [pokemonLists, setTotalItems]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const filteredAndSortedData = useMemo(() => {
    if (!pokemonLists?.results) return [];

    return pokemonLists.results
      .filter((pokemon) => pokemon.name.includes(query))
      .sort((a, b) => {
        if (sort === "asc") {
          return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
      });
  }, [pokemonLists, query, sort]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (query) setQuery("");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1>Pokemon List</h1>
        <div className="flex items-center">
          <SearchBar query={query} setQuery={setQuery} />
          <Sort />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAndSortedData.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>

      {!query && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
