import { useQuery } from "@tanstack/react-query";
import { pokemonAPI } from "./pokemon-api";

export function usePokemonList() {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => pokemonAPI.getPokemonList(),
  });
}

export function usePokemonDetail(id: string) {
  return useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => pokemonAPI.getPokemonDetail(id),
  });
}
