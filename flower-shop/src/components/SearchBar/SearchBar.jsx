import { useContext, useState } from "react";
import { searchContext } from "../../layout/Layout";

import {
  Button,
  Box,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Close, SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  const [searchBar, setSearchBar] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const handleSearch = () => {
    console.log("we are searching", searchBar);
    setSearchBarVisible(false);
  };

  const handleCancel = () => {
    setSearchBarVisible(false);
    setSearchBar("");
  };

  return (
    <Box>
      <IconButton sx={{ backgroundColor: "none" }}>
        <SearchOutlined
          sx={{ color: "white" }}
          onClick={() => setSearchBarVisible(true)}
        />
      </IconButton>

      <Dialog open={searchBarVisible} onClose={handleCancel}>
        <DialogTitle>Search Products</DialogTitle>
        <DialogContent>
          <TextField
            label="Search"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <IconButton sx={{ backgroundColor: "none" }}>
            <SearchOutlined sx={{ color: "blue" }} onClick={handleSearch} />
          </IconButton>

          <IconButton sx={{ backgroundColor: "none" }}>
            <Close sx={{ color: "blue" }} onClick={handleCancel} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SearchBar;
