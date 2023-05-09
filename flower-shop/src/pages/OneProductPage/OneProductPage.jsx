import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import OneProduct from "../../components/OneProduct/OneProduct";
import { searchByApi } from "../../services/apiFlower";
import { Box, Breadcrumbs, Typography } from "@mui/material";
// import { getProductByCategory } from "../../services/apiFlower";

function OneProductPage() {
  const [product, setProduct] = useState({});
  // const [category, setCategory] = useState({})

  const { productName } = useParams();
  // const { categoryName } = useParams();

  useEffect(() => {
    async function showOneProduct() {
      const oneProductData = await searchByApi(productName);
      setProduct(oneProductData[0]);
    }
    showOneProduct();
  }, [productName]);

  // useEffect(() => {
  //   async function getAndSetCategory() {
  //     const productCategory = await getProductByCategory(categoryName);

  //     setCategory(productCategory);
  //   }
  //   getAndSetCategory();
  // }, [categoryName]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
      }}
    >
      <Breadcrumbs separator="›" aria-label="breadcrumbs" sx={{ width: "100%", pt: '40px', pl: '40px' }}>
        <Link style={{ textDecoration: "none", color: '#694736', fontWeight: '600'}} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none", color: '#694736', fontWeight: '600'  }} to="/products">
          Products
        </Link>
        {/* <Link color="inherit" to={`/products/${categoryName}`}>
          {categoryName}
        </Link> */}
        <Typography sx={{ color: '#A7D489', fontWeight: '600' }} >{product.productName}</Typography>
      </Breadcrumbs>
      <OneProduct 
        picture={product.picture}
        productName={product.productName}
        price={product.price}
        description={product.description}
      />
    </Box>
  );
}

export default OneProductPage;
