import { useContext } from "react";
import { searchContext } from "../../layout/Layout";

function SearchBar() {
  const [searchBar, setSearchBar] = useContext(searchContext);
  return (
    <form>
      <input
        type="text"
        placeholder="Search a product..."
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
