import { useQuery } from "@tanstack/react-query";
import { pokemonAPI } from "./pokemon-api";

export function usePokemonList(limit: number = 20, offset: number = 0) {
  return useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => pokemonAPI.getPokemonList(limit, offset),
  });
}

export function usePokemonDetail(id: string) {
  return useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => pokemonAPI.getPokemonDetail(id),
  });
}
