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
        console.log(response);
        setSearchResults(response);
      } catch (error) {
        console.log("Error searching products:", error);
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
              to={`/products/:categoryName/productName`}
              // to={`/products/:categoryName/${product.productName}`}
            >
              {product.productName}
              {/* <ProductCard
                key={product.productId}
                productName={product.productName}
                price={product.price}
              /> */}
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
      <IconButton sx={{ backgroundColor: "none" }}>
        <SearchOutlined
          sx={{ color: "#694736 ", "&:hover": { color: "#254E25"} }}
          onClick={() => setSearchBarVisible(true)}
        />
      </IconButton>

      <Dialog
        open={searchBarVisible || searchBar.length > 0}
        onClose={handleCancel}
      >
        <DialogTitle>Search Products</DialogTitle>
        <DialogContent>
          <Input
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
