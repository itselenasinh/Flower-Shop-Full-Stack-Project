import React, { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context/CartContext";
import "./ShoppingCart.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function ShoppingCart() {
  const [cart, setCart] = useContext(ShoppingCartContext);

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

  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead />
        <TableRow>
          <TableCell align="center">Products Qty.</TableCell>
          <TableCell align="center">Price</TableCell>
        </TableRow>
        <TableBody>
          <TableCell align="center">{quantity}</TableCell>
          <TableCell align="center">{totalPrice}€</TableCell>
        </TableBody>
      </Table>
      <Button sx={{ display: 'flex',}} variant='outlined' color="secondary" onClick={() => console.log(cart)}>
        Checkout
      </Button>
    </TableContainer>
  );
}

export default ShoppingCart;
