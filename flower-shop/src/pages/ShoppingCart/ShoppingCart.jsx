import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context/CartContext";
import { CheckoutOrderContext } from "../../Context/OrderContext";
import "./ShoppingCart.css";

import {
  Box,
  Button,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { ClearOutlined } from "@mui/icons-material";
import PromoPopup from "../../components/PromoPopup/PromoPopup";
import { AuthUserContext } from "../../Context/AuthContext";

function ShoppingCart() {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const navigate = useNavigate();
  const [cart, setCart] = useContext(ShoppingCartContext);
  const { createOrder } = useContext(CheckoutOrderContext);
  const [isLogged] = useContext(AuthUserContext);

  const addToCart = (productName) => {
    console.log(productName);
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
        return [...currProducts, { productName, quantity: 1 }];
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
    console.log(
      "acc",
      parseFloat(acc).toFixed(2) * 100,
      "curr",
      curr.quantity * parseFloat(curr.price).toFixed(2) * 100
    );
    return (
      (parseFloat(acc).toFixed(2) * 100 +
        curr.quantity * parseFloat(curr.price).toFixed(2) * 100) /
      100
    );
  }, 0);

  const handleCheckout = async () => {
    if (isLogged) {
      await createOrder(cart);
      setCart([]);
      setOrderSuccess(true);
    }
  };
  const pushCheckout = () => {
    if (orderSuccess && quantity === 0) {
      return <h2>Thank you for your ordering</h2>;
    } else if (quantity === 0) {
      return <h2 className="h2">Empty Cart</h2>;
    } else {
      return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isLogged ? null : <PromoPopup />}
      <TableContainer
        sx={{
          maxWidth: "80vw",
          margin: "auto",
          border: "solid 3px #EED2B5",
          borderRadius: "16px",
          p: "30px",
          backgroundColor: "lightBeige",
        }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="spanning table">
          <TableHead title="Shopping Cart" />

          {cart.map((product, i) => {
            console.log(product);
            return (
              <TableBody key={i}>
                <TableRow>
                  <TableCell align="center">
                    <Button onClick={() => deleteProduct(product.productName)}>
                      <ClearOutlined sx={{ color: "#694736" }} />
                    </Button>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ height: "130px", width: "130px" }}
                  >
                    <CardMedia
                      component="img"
                      image={product.picture}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "6px",
                      }}
                    ></CardMedia>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ height: "130px", fontSize: "20px" }}
                  >
                    {product.productName}
                  </TableCell>
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
                      height: "130px",
                    }}
                  >
                    <Box
                      align="center"
                      sx={{
                        border: "solid 1px #694736",
                        borderRadius: "16px",
                        backgroundColor: "lightBeige",
                        width: "150px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
            );
          })}
          <Typography>{pushCheckout()}</Typography>
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
                fontWeight: "600",
                borderColor: "#EED2B5",
                backgroundColor: "#EED2B5",
                borderRadius: "16px",
                "&:hover": {
                  color: "#254E25",
                  backgroundColor: "#D5E7B8",
                  borderColor: "#D5E7B8",
                },
              }}
              onClick={handleCheckout}
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
                  backgroundColor: "#D5E7B8",
                  borderColor: "#D5E7B8",
                },
              }}
              onClick={handleCheckout}
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
                  backgroundColor: "#D5E7B8",
                  borderColor: "#D5E7B8",
                },
              }}
              variant="outlined"
            >
              Become a member
            </Button>
          </Box>
        )}
      </TableContainer>
    </Box>
  );
}

export default ShoppingCart;
