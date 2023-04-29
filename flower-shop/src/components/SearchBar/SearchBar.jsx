import { useContext, useEffect, useState } from "react";
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
  const [searchResults, setSearchResults] = useState([]);

  const result = (value) => {
    searchByApi(value).then((response) => {
      const results = response.data.filter((product) => {
        return (
          value &&
          product &&
          product.productName &&
          product.productName.toLowerCase().includes(value.toLowerCase())
        );
      });
      setSearchResults(results);
    });
  };

  // useEffect(() => {
  //   async function searchByValue(value) {
  //     try {
  //       const response = await searchByApi(value)
  //       const results = response.data.filter((product) => {
  //         return (
  //            value &&
  //           product &&
  //           product.productName &&
  //           product.productName.
  //           )
  //       })
  //       setSearchBar(results)
  //     } catch (error ) {
  //       console.log(error)
  //     }
  //   }
  //  searchByValue(searchBar)

  // },[searchBar])

  const handleChange = (value) => {
    setSearchBar(value);
    result(value);
  };

  const handleSearch = () => {
    setSearchBar("");
    setSearchResults([]);
    setSearchBarVisible(false);
  };

  const handleCancel = () => {
    setSearchBar("");
    setSearchResults([]);
    setSearchBarVisible(false);
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
          {searchResults.map((product) => (
            <div key={product.id}>
              <p>{product.productName}</p>
            </div>
          ))}
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
