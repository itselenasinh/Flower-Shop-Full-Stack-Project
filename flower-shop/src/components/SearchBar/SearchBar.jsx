import { useContext } from "react";
import { searchContext } from "../../layout/Layout";
import "./SearchBar.css";
import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
// import SearchOutlined from

function SearchBar() {
  const [searchBar, setSearchBar] = useContext(searchContext);
  return (
    <div>
    {/* <input type="text" placeholder="Search a product..." /> */}
      <IconButton
        sx={{ backgroundColor: "none"}}
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      >
        <SearchOutlined type="submit" sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
}

export default SearchBar;
