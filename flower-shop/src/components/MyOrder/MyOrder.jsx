import { useState, useEffect } from "react";
import { getAllUserorder } from "../../services/apiFlower";
import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MyOrder() {
  const [myOrders, setmyOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      const list = await getAllUserorder();

      setmyOrders(list);
    }
    getAllOrders();
  }, []);

  const showMyOrders = () => {
    if (myOrders && myOrders.length > 0) {
      return myOrders.map((order) => (
        <Box key={order.id} sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h6">Order nº: {order.id}</Typography>
          {order.products.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "space-evenlty",
                padding: "50px",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100px",
                  height: "150px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "lightBeige",
                  position: "relative",
                  overflow: "hidden",
                  gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                }}
              >
                <Link
                  to={`/products/category/${product.productName}`}
                  style={{ textDecoration: "none" }}
                >
                  <Tooltip title="Buy again?">
                    <CardMedia
                      component="img"
                      alt=""
                      image={product.picture}
                      sx={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: "lightBeige",
                        transition: "transform 0.3s, border 0.3s",
                        "&:hover": {
                          transform: "scale(1.1, 1.1)",
                        },
                      }}
                    ></CardMedia>
                  </Tooltip>
                </Link>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "10px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    width: "150px",
                    backgroundColor: "lightBeige",
                    color: "#474747",
                    pt: 1,
                    pb: "",
                  }}
                >
                  {product.productName}
                </Typography>
                <Typography
                  className="product-price"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#474747",
                  }}
                >
                  {product.price}€ IVA inc.
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>
      ));
    } else {
      return (
        <Typography
          sx={{
            fontSize: 20,
            display: "flex",
          }}
        >
          No products ordered yet
        </Typography>
      );
    }
  };

  return <Box>{showMyOrders()}</Box>;
}

export default MyOrder;
