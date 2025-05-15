interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <div>
      <input
        className="border border-black"
        placeholder="type here to search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
