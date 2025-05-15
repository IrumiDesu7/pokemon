import { create } from "zustand";
import type { PokemonList } from "../types/pokemon-list";

type Store = {
  pokemons: PokemonList[];
  sort: "asc" | "desc";
  setPokemons: (pokemons: PokemonList[]) => void;
  setSort: (sort: "asc" | "desc") => void;
};

const usePokemonStore = create<Store>((set) => ({
  pokemons: [],
  setPokemons: (pokemons: PokemonList[]) => set({ pokemons }),
  sort: "asc",
  setSort: (sort: "asc" | "desc") => set({ sort }),
}));

export default usePokemonStore;
