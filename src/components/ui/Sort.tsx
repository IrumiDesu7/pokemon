import usePokemonStore from "../../store/pokemon-store";

export const Sort = () => {
  const { setSort, sort } = usePokemonStore();
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        className={`px-3 py-2 text-sm font-medium rounded-l-md border border-gray-300 ${
          sort === "asc"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
        onClick={() => setSort("asc")}
      >
        Asc
      </button>
      <button
        className={`px-3 py-2 text-sm font-medium rounded-r-md border border-gray-300 border-l-0 ${
          sort === "desc"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
        onClick={() => setSort("desc")}
      >
        Desc
      </button>
    </div>
  );
};
