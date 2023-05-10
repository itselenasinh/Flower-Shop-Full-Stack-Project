import { useState, useEffect } from "react";
import { getAllUserorder } from "../../services/apiFlower";
import { Box, Typography } from "@mui/material";

function MyOrder(
  id,
  productName,
  price,
  description,
  picture,
  stock,
  category
) {
  const [myOrders, setmyOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      const list = await getAllUserorder();
      console.log(list);
      setmyOrders(list);
    }
    getAllOrders();
  }, []);

  const showMyOrders = () => {
    if (myOrders && myOrders.length > 0) {
      return myOrders.map((order) => (
        <Box key={order.id}>
          {order.products.map((product) => {
            console.log(product);
          })}
          <Typography variant="h6">Order ID: {order.id}</Typography>
          {order.productsQTYs &&
            order.productsQTYs.length > 0 &&
            order.productsQTYs.map((product) => (
              <Box key={product.productId}>
                <Typography variant="subtitle1">{product.productId}</Typography>
                <Typography variant="subtitle2">
                  Quantity: {product.QTY}
                </Typography>
                <Typography variant="subtitle2">
                  Price: {product.price}
                </Typography>
                <Typography variant="subtitle2">
                  Total: {product.totalPrice}
                </Typography>
              </Box>
            ))}
        </Box>
      ));
    } else {
      return <p>No products ordered yet</p>;
    }
  };

  return <Box>{showMyOrders()}</Box>;
}

export default MyOrder;
