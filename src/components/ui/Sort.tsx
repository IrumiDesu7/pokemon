import usePokemonStore from "../../store/pokemon-store";

export const Sort = () => {
  const { setSort, sort } = usePokemonStore();
  return (
    <div>
      <button
        className={` p-2 rounded ${
          sort === "asc" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setSort("asc")}
      >
        Asc
      </button>
      <button
        className={` p-2 rounded ${
          sort === "desc" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setSort("desc")}
      >
        Desc
      </button>
    </div>
  );
};
