import { useContext, useState, useEffect } from "react";
import { searchContext } from "../../layout/Layout";

import { searchByApi } from "../../services/apiFlower";
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
} from "@mui/material";
import { Close, SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchBar, setSearchBar] = useContext(searchContext);

  const result = (value) => {
    searchByApi(value)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((products) => {
          return (
            value &&
            products &&
            products.productName &&
            products.productsName.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setSearchBar(value);
    result(value);
  };

  const handleSearch = () => {
    console.log(setSearchBar);
    setSearchBar("");
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
          <Input
            label="Search"
            type={"text"}
            value={searchBar}
            placeholder={"Search Products"}
            onChange={(e) => handleChange(e.target.value)}
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
