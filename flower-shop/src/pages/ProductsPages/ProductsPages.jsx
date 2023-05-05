import React from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import { Box } from "@mui/material";

function ProductsPages() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evently" }}>
      <CategoryProduct />
    </Box>
  );
}

export default ProductsPages;
