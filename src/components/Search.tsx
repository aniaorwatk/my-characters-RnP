
interface ISearchType {
    searchCharacter: (event: React.ChangeEvent<HTMLInputElement>)=> void;
    query: string
}

const Search = ({ query, searchCharacter }: ISearchType) => {
    return (
        <input
        className="inputSearch"
        type="text"
        value={query}
        placeholder="Search..."
        onChange={searchCharacter}
      />
    );
  };
  
  export default Search;
  