import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/CartContext";

import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductCard({ productName, price, description, picture, stock }) {
  const navigate = useNavigate();
  const [cart, setCart] = useContext(ShoppingCartContext);
  console.log(picture);

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
    <Box minHeight={150}>
      <Card
        sx={{
          maxWidth: 150,
          padding: 10,
          margin: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader />
        <Typography variant="h7" fontFamily="Montserrat">
          {productName}
        </Typography>

        {quantityPerProduct > 0 && (
          <div className="product-quantity">{quantityPerProduct}</div>
        )}
        <img src={picture}></img>
        {/* <CardMedia
          component="img"
          image={picture}
          alt={picture}
          sx={{ flex: "1 1 auto" }}
        ></CardMedia> */}
        <Typography>{description}</Typography>
        <Typography className="product-price">{price + "€"}</Typography>
        {quantityPerProduct === 0 ? (
          <Button className="product-add-button" onClick={() => addToCart()}>
            <IconButton sx={{ backgroundColor: "none" }}>
              <AddShoppingCartIcon />
            </IconButton>
          </Button>
        ) : (
          <Button className="product-plus-button" onClick={() => addToCart()}>
            <IconButton sx={{ backgroundColor: "none" }}>
              <Add />
            </IconButton>
          </Button>
        )}
        {quantityPerProduct > 0 && (
          <Button
            className="product-minus-button"
            onClick={() => removeProduct(productName)}
          >
            remove product
          </Button>
        )}
        <p>{stock}</p>

        <Button onClick={() => viewProduct(productName)}>View product</Button>
      </Card>
    </Box>
  );
}

export default ProductCard;
