import Banner from "../../components/Banner/Banner";
//import { MainCarousel } from "../../components/Carousel/Carousel";
//import { ContactForm } from "../../components/Contact Form/ContactForm";
import Promotions from "../../components/Promotions/Promotions";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import CookieConsent from "react-cookie-consent";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProduct } from "../../services/apiFlower";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getMostSaledProducts() {
      const randomProducts = await getProduct();
      setProducts(randomProducts);
    }
    getMostSaledProducts();
  }, []);

  function mostSaledProducts() {
    const randomProducts = [];
    const numberOfProducts = 3;

    for (let i = 0; i < numberOfProducts; i++) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (
        randomProducts.some((product) => {
          product.productName === products[randomIndex].productName;
        })
      ) {
        i--;
        console.log(products[randomIndex]);
      } else {
        randomProducts.push({ ...products[randomIndex] });
      }
    }
    return randomProducts.map((product) => (
      <Link
        key={product.productName}
        to={`/products?productName=${product.productName}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <ProductCard key={product.productName} {...product} />
      </Link>
    ));
  }

  return (
    <>
      <CookieConsent
        debug={true}
        location=""
        style={{ background: "rgb(0, 0, 0, 0.4)", color: "lightpink" }}
        buttonStyle={{ background: "#efe1e3", fontSize: "20px" }}
        expires={100}
      >
        {" "}
        <span style={{ fontSize: "20px" }}>
          This site uses cookies! Check out our{" "}
          <Link to="/privacy">Privacy Policy</Link> for more.
        </span>
      </CookieConsent>
      <Banner />
      <Promotions />
      <Box sx={{}}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "80px",
            flexWrap: "wrap",
            minWidth: "100vw",
            fontSize: "50px",
          }}
        >
          -MOST GIFTED PRODUCTS-
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "20px",
            flexWrap: "wrap",
            minWidth: "100vw",
          }}
        >
          {products.length > 0 && mostSaledProducts()}
          {/* <Typography variant="h6">
       <p>There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.  It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
       <p>All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
      </Typography> */}
        </Container>
      </Box>
      <Subscribe />

      <Footer />
    </>
  );
}

export default Home;
