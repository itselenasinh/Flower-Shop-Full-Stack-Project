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
  List,
  Typography,
} from "@mui/material";
import { Close, SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
//import ProductCard from "../ProductCard/ProductCard";

function SearchBar() {
  const [searchBar, setSearchBar] = useContext(searchContext);
  const [searchResults, setSearchResults] = useState([]);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await searchByApi(searchBar);
        const results = response.data.filter((product) => {
          return product.productName
            .toString()
            .toString()
            .toLowerCase()
            .includes(searchBar.toLowerCase());
        });
        setSearchResults(results);
      } catch (error) {
        console.log(error);
      }
    };

    searchProducts();
  }, [searchBar]);

  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };

  const handleSearch = () => {
    setSearchBarVisible(false);
  };

  const handleCancel = () => {
    setSearchBar("");
    setSearchResults([]);
    setSearchBarVisible(false);
  };

  const showSearchProduct = () => {
    return (
      searchResults.length > 0 &&
      searchBar.length > 0 && (
        <List
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {searchResults.map((product) => (
            <Link
              style={{ textDecoration: "none" }}
              key={product.productName}
              to={`/products/category/${product.productName}`}
              onClick={() => handleCancel()}
            >
              {product.productName}
            </Link>
          ))}
        </List>
      )
    );
  };

  const noProducts = () => {
    return (
      searchResults.length === 0 &&
      searchBar && (
        <Typography sx={{ marginTop: 2 }}>
          product no found: {searchBar}
        </Typography>
      )
    );
  };

  return (
    <Box>
      <IconButton
        onClick={() => setSearchBarVisible(true)}
        sx={{ backgroundColor: "none" }}
      >
        <SearchOutlined
          sx={{ color: "#694736 ", "&:hover": { color: "#254E25" } }}
        />
      </IconButton>

      <Dialog
        minWidth={"100vw"}
        PaperProps={{
          style: {
            position: "absolute",
            display: "flex",
            top: 0,
            width: "100%",
            margin: 0,
          },
        }}
        open={searchBarVisible || searchBar.length > 0}
        onClose={handleCancel}
      >
        <DialogTitle textAlign={"center"} sx={{ color: "#694736" }}>
          Search Products
        </DialogTitle>
        <DialogContent>
          <Input
            sx={{ color: "#694736", width: "100%", textAlign: "center" }}
            label="Search"
            type={"text"}
            value={searchBar}
            placeholder={"Search Products"}
            onChange={handleChange}
          />
          {showSearchProduct()}
          {noProducts()}
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleSearch} sx={{ backgroundColor: "none" }}>
            <SearchOutlined sx={{ color: "#694736" }} />
          </IconButton>

          <IconButton onClick={handleCancel} sx={{ backgroundColor: "none" }}>
            <Close sx={{ color: "#694736" }} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SearchBar;
