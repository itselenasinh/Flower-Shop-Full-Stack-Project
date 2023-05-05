import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchByApi } from "../../services/apiFlower";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";

function OneProductPage() {
  const [product, setProduct] = useState({});
  const { productName } = useParams();

  useEffect(() => {
    async function showOneProduct() {
      const oneProductData = await searchByApi(productName);
      setProduct(oneProductData[0]);
    }
    showOneProduct();
  }, [productName]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ProductCard
        picture={product.picture}
        productName={product.productName}
        price={product.price}
        description={product.description}
      />
    </Box>
  );
}

export default OneProductPage;
