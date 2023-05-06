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
import { ClearOutlined } from "@mui/icons-material";

function ShoppingCart() {
  const [cart, setCart] = useContext(ShoppingCartContext);
  const [isLogged, setIsLogged] = useState(false);

  const addToCart = (productName) => {
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

  const deleteProduct = (productName) => {
    const newCart = cart.filter(
      (product) => product.productName !== productName
    );
    setCart(newCart);
  };

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

 

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
      <TableContainer
        sx={{
          maxWidth: "80vw",
          margin: "auto",
          border: "solid 1px #EED2B5",
          borderRadius: "16px",
          p: "30px",
          backgroundColor: "#EED2B5",
        }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="spanning table">
          <TableHead title="Shopping Cart" />

          <TableRow>Cart</TableRow>

          {cart.map((product, i) => (
            <TableBody key={i}>
              <TableRow>
                <TableCell align="center">
                  <Button onClick={() => deleteProduct(product.productName)}>
                    <ClearOutlined sx={{ color: "#694736" }} />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <img src={product.picture} />
                </TableCell>
                <TableCell align="center">{product.productName}</TableCell>
                <TableCell
                  align="center"
                  alignItems="center"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    textAlign: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    align="center"
                    sx={{
                      border: "solid 1px #694736",
                      borderRadius: "16px",
                      backgroundColor: "#EED2B5",
                      width: "150px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pt: "00px",
                      color: "#694736",
                      fontStyle: "bold",
                    }}
                  >
                    <Button
                      onClick={() => removeProduct(product.productName)}
                      sx={{ width: "0", p: "0", color: "#694736" }}
                    >
                      -
                    </Button>
                    {product.quantity}
                    <Button
                      onClick={() => addToCart(product.productName)}
                      sx={{ width: "0", p: "0", color: "#694736" }}
                    >
                      +
                    </Button>
                  </Box>
                </TableCell>
                <TableCell align="center">{product.price}€</TableCell>
              </TableRow>
            </TableBody>
          ))}
          {quantity === 0 ? <h2>Empty Cart</h2> : null}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align="center">Subtotal:</TableCell>
            <TableCell align="center">{totalPrice}€</TableCell>
          </TableRow>
        </Table>

        {isLogged ? (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#694736",
                borderColor: "#EED2B5",
                backgroundColor: "#EED2B5",
                borderRadius: "16px",
                "&:hover": {
                  color: "#254E25",
                  backgroundColor: "#FFE598",
                  borderColor: "#FFE598",
                },
              }}
            >
              Checkout
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                color: "#694736",
                borderColor: "#EED2B5",
                backgroundColor: "#EED2B5",
                borderRadius: "16px",
                "&:hover": {
                  color: "#254E25",
                  backgroundColor: "#FFE598",
                  borderColor: "#FFE598",
                },
              }}
            >
              Checkout
            </Button>
            <Button
              component={Link}
              to="/signup"
              sx={{
                ml: "20px",
                color: "#694736",
                borderColor: "#EED2B5",
                backgroundColor: "#EED2B5",
                borderRadius: "16px",
                "&:hover": {
                  color: "#254E25",
                  backgroundColor: "#FFE598",
                  borderColor: "#FFE598",
                },
              }}
              variant="outlined"
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
