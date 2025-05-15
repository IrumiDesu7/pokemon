import type { PokemonListResponse } from "../types/pokemon-list";
import type { PokemonDetail } from "../types/pokemon-detail";
const BASE_URL = "https://pokeapi.co/api/v2/";

export const pokemonAPI = {
  getPokemonList: async (
    limit: number = 20,
    offset: number = 0
  ): Promise<PokemonListResponse> => {
    const res = await fetch(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

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
