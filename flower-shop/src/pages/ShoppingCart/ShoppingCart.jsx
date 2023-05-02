import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context/CartContext";
import "./ShoppingCart.css";

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
} from "@mui/material";

import { Link } from "react-router-dom";

function ShoppingCart() {
  const [cart, setCart] = useContext(ShoppingCartContext);
  const [isLogged, setIsLogged] = useState(false);

  const addToCart = () => {
    setCart((currProducts) => {
      const isProductsFound = currProducts.find(
        (product) => product.productName
      );
      if (isProductsFound) {
        return currProducts.map((product) => {
          if (product.productName) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const removeProduct = (productName) => {
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
  };

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <TableContainer sx={{ margin: "auto" }}>
        <Table sx={{ minWidth: 400 }} aria-label="spanning table">
          <TableHead title="Shopping Cart" />

          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Products Qty.</TableCell>
          </TableRow>

          {cart.map((product, i) => (
            <TableBody key={i}>
              <TableRow>
                <TableCell align="center">
                  <img src={product.picture} />
                </TableCell>
                <TableCell align="center">{product.productName}</TableCell>
                <TableCell align="center">
                  {product.quantity}
                  <Button onClick={() => addToCart()}>+</Button>
                  <Button onClick={() => removeProduct(product.productName)}>
                    -
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}

          {quantity === 0 ? <h2>Empty Cart</h2> : null}
          <TableRow>
            <TableCell />
            <TableCell align="center"> Total products in the cart:</TableCell>
            <TableCell align="center">{quantity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell align="center">Total price:</TableCell>
            <TableCell align="center">{totalPrice}€</TableCell>
          </TableRow>
        </Table>

        {isLogged ? (
          <Button
            sx={{ display: "flex", justifyContent: "flex-end", mt: "20px" }}
            variant="outlined"
            color="secondary"
            onClick={() => console.log(cart)}
          >
            Checkout
          </Button>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "20px" }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => console.log(cart)}
            >
              Checkout
            </Button>
            <Button
              component={Link}
              to="/signup"
              sx={{ ml: "20px" }}
              variant="outlined"
              color="secondary"
            >
              Checkout as member
            </Button>
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}

export default ShoppingCart;
