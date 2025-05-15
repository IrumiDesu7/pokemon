import { create } from "zustand";
import type { PokemonList } from "../types/pokemon-list";

type Store = {
  pokemons: PokemonList[];
  sort: "asc" | "desc";
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  setPokemons: (pokemons: PokemonList[]) => void;
  setSort: (sort: "asc" | "desc") => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  setTotalItems: (count: number) => void;
};

const usePokemonStore = create<Store>((set) => ({
  pokemons: [],
  sort: "asc",
  currentPage: 1,
  itemsPerPage: 20,
  totalItems: 0,
  setPokemons: (pokemons: PokemonList[]) => set({ pokemons }),
  setSort: (sort: "asc" | "desc") => set({ sort }),
  setCurrentPage: (currentPage: number) => set({ currentPage }),
  setItemsPerPage: (itemsPerPage: number) => set({ itemsPerPage }),
  setTotalItems: (totalItems: number) => set({ totalItems }),
}));

export default usePokemonStore;
