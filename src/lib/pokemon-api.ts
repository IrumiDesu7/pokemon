import type { PokemonListResponse } from "../types/pokemon-list";
import type { PokemonDetail } from "../types/pokemon-detail";
const BASE_URL = "https://pokeapi.co/api/v2/";

export const pokemonAPI = {
  getPokemonList: async (): Promise<PokemonListResponse> => {
    const res = await fetch(`${BASE_URL}/pokemon`);

    if (!res.ok) {
      throw new Error("Failed to fetch pokemon list");
    }

    return res.json();
  },

  getPokemonDetail: async (id: string): Promise<PokemonDetail> => {
    const res = await fetch(`${BASE_URL}/pokemon/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch pokemon detail");
    }

    return res.json();
  },
};
