import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/CartContext";
import "./ProductCard.css";

import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";


function ProductCard({ productName, price, description, picture, stock }) {
  const navigate = useNavigate();
  const [cart, setCart] = useContext(ShoppingCartContext);

  function addToCart() {
    setCart((currProducts) => {
      const isProductsFound = currProducts.find(
        (product) => product.productName === productName
      );
      if (isProductsFound) {
        return currProducts.map((product) => {
          if (product.productName === productName) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        return [...currProducts, { productName, quantity: 1, price }];
      }
    });
  }

  function removeProduct() {
    setCart((currProducts) => {
      if (
        currProducts.find((product) => product.productName === productName)
          ?.quantity === 1
      ) {
        return currProducts.filter(
          (product) => product.productName !== productName
        );
      } else {
        return currProducts.map((product) => {
          if (product.productName === productName) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  }

  function getQuantityByProductName(productName) {
    return (
      cart.find((product) => product.productName === productName)?.quantity || 0
    );
  }

  const quantityPerProduct = getQuantityByProductName(productName);

  function viewProduct(productName) {
    navigate(`/products/category/${productName}`);
  }

  return (
    <Box
      sx={{
        minHeight: 350,
        display: "flex",
        justifyContent: "space-evenly",
        padding: "50px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "654px",
          height: "420px",
          borderRadius: "17px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          overflow: "hidden",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt=""
          image={picture}
          sx={{ height: "420px", width: "327px" }}
        ></CardMedia>

        <Box
          sx={{
            float: "left",
            height: "420px",
            width: "327px",
            borderRadius: "17px",
            backgroundColor: "#ffffff",
          }}
        >
          <Box sx={{ height: "300px", width: "327px" }}>
            <Typography
              fontFamily="Montserrat"
              level="h1"
              sx={{
                fontSize: "34px",
                pt: "52px",
                m: "0 0 0 38px",
                width: "380px",
                color: "#474747",
              }}
            >
              {productName}
            </Typography>

            <Typography
              sx={{
                h: "125px",
                m: "0 0 0 38px",
                color: "#8d8d8d",
                lineHeight: "1.7em",
                fontSize: "15px",
                fontWeight: "lighter",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
          </Box>

          {/* {quantityPerProduct > 0 && (
                <div className="product-quantity">{quantityPerProduct}</div>
              )}
            </div> */}
          <Box
            sx={{ h: "103px", w: "327px", mart: "17px", position: "relative" }}
          >
            <Typography
              className="product-price"
              sx={{
                display: "inline-block",
                position: "absolute",
                top: "-13px",
                h: "50px",
                margin: "0 0 0 38px",
                fontSize: "28px",
                fontWeight: "lighter",
                color: "#474747",
              }}
            >
              {" "}
              <span>{price + "€"}</span>
            </Typography>

            <Box>
              <div>
                {quantityPerProduct === 0 ? (
                  <Button
                    sx={{
                      float: "right",
                      display: "inline-block",
                      height: "50px",
                      width: "176px",
                      margin: "0 40px 0 16px",
                      boxSizing: "border-box",
                      border: "transparent",
                      borderRadius: "60px",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#ffffff",
                      backgroundColor: "#9cebd5",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    // level="body2"
                    // className="product-add-button"
                    // onClick={() => addToCart()}
                  >BUY NOW
                    {/* <IconButton sx={{ backgroundColor: "none" }}>
                    <AddShoppingCartIcon />
                  </IconButton> */}
                  </Button>
                ) : (
                  <Button
                    className="product-plus-button"
                    onClick={() => addToCart()}
                  >
                    <IconButton sx={{ backgroundColor: "none" }}>
                      <Add />
                    </IconButton>
                  </Button>
                )}
                {quantityPerProduct > 0 && (
                  <Button
                    fontWeight="lg"
                    level="body2"
                    className="product-minus-button"
                    onClick={() => removeProduct(productName)}
                  >
                    remove product
                  </Button>
                )}
                <p>{stock}</p>
                <Button onClick={() => viewProduct(productName)}>
                  View product
                </Button>
              </div>
            </Box>
          </Box>

          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            sx={{ ml: "auto", alignSelf: "flex-start" }}
          >
            <FavoriteBorderRoundedIcon color="danger" />
          </IconButton>

        
        </Box>
      </Card>
    </Box>
  );
}

export default ProductCard;
