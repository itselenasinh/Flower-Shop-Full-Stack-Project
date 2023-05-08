import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/CartContext";
import { WishlistProductsContext } from "../../Context/WishlistContext";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { FavoriteBorderRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

function OneProduct({
  productName,
  price,
  description,
  picture,
  stock,
  category,
}) {
  const [cart, setCart] = useContext(ShoppingCartContext);
  const { addToWishlist } = useContext(WishlistProductsContext);

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
        return [...currProducts, { productName, quantity: 1, price, picture }];
      }
    });
  }

  function removeProduct(productName) {
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

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  return (
    <Box>
      <Box
        sx={{
          minHeight: 350,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: 'lightbeige',
          // padding: "50px",
          pt: "50px",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "scale(1.05, 1.05)",
          },
        }}
      >
        <Card
          sx={{
            width: "700px",
            height: "400px",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            overflow: "hidden",
            gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
            boxShadow: "none",
            position: "relative",
            backgroundColor: 'lightBeige',
          }}
        >
          <CardMedia
            component="img"
            alt=""
            image={picture}
            sx={{
              height: "400px",
              width: "300px",
              borderRadius: "7px",
              backgroundColor: 'lightBeige',
            }}
          ></CardMedia>

          <IconButton
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "410px",
              backgroundColor: "none",
              color: "white",
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
            onClick={() => {
              handleAddToWishlist({
                productName,
                price,
                description,
                picture,
                stock,
                category,
              });
            }}
          >
            <FavoriteBorderRounded />
          </IconButton>

          <Box
            sx={{
              height: "500px",
              width: "400px",
              borderRadius: "7px",
              backgroundColor: "lightBeige",
              p: 0,
              m: 0,
              pl: '30px'
            }}
          >
            <Typography
              fontFamily="Montserrat"
              level="h1"
              sx={{
                height: "60px",
                fontSize: "40px",
                display: "flex",
                textAlign: "start",
                width: "400px",
                color: "#474747",
                textTransform: "uppercase",
              }}
            >
              {productName}
            </Typography>

            <Typography
              className="product-price"
              sx={{
                display: "flex",
                fontSize: "20px",
                width: "400px",
                color: "#474747",
              }}
            >
              {price}€ IVA inc.
            </Typography>

            <Typography
              sx={{
                pt: "10px",
                height: "340px",
                width: "330px",
                fontStyle: "italic",
              }}
            >
              {description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "60px",
                ml: "120px",
                mg: "0",
                boxSizing: "border-box",
                border: "transparent",
                borderRadius: "60px",
                letterSpacing: "0.2em",
                backgroundColor: "#EED2B5",
                cursor: "pointer",
                outline: "none",
                "&:hover": {
                  color: "#254E25",
                  backgroundColor: "#D5E7B8",
                  borderColor: "#D5E7B8",
                },
              }}
            >
              {quantityPerProduct === 0 ? (
                <Button
                  level="body2"
                  className="product-add-button"
                  sx={{
                    p: "0",
                    b: "0",
                    color: "#694736",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                  onClick={() => addToCart()}
                >
                  Add to cart
                </Button>
              ) : (
                <Button
                  sx={{
                    p: "0",
                    b: "0",
                    color: "#694736",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                  onClick={() => removeProduct(productName)}
                >
                  -
                </Button>
              )}

              {quantityPerProduct > 0 && (
                <Typography
                  sx={{
                    p: "0",
                    b: "0",
                    color: "#694736",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                  className="product-quantity"
                >
                  {quantityPerProduct}
                </Typography>
              )}

              {quantityPerProduct > 0 && (
                <Button
                  sx={{
                    p: "0",
                    b: "0",
                    color: "#694736",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                  fontWeight="lg"
                  level="body2"
                  className="product-minus-button"
                  onClick={() => addToCart()}
                >
                  +
                </Button>
              )}
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default OneProduct;
