import "./Search.scss"

interface ISearchType {
  searchCharacter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string
}

const Search = ({ query, searchCharacter }: ISearchType) => {
  return (
    <input
      className="inputSearch"
      type="text"
      value={query}
      placeholder="Find Character..."
      onChange={searchCharacter}
    />
  );
};

export default Search;
