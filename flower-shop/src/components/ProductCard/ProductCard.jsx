import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/CartContext";

import { Box, Card, CardMedia, Typography } from "@mui/material";

function ProductCard({ productName, price, description, picture, stock }) {
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();

  const [cart, setCart] = useContext(ShoppingCartContext);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link
      to={`/products/category/${productName}`}
      style={{ textDecoration: "none" }}
    >
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            width: "400px",
            height: "500px",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden",
            gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          }}
        >
          <CardMedia
            component="img"
            alt=""
            image={picture}
            sx={{
              height: "400px",
              width: "400px",
              transition: "transform 0.3s, border 0.3s",
              "&:hover": {
                transform: "scale(1.1, 1.1)",
              },
            }}
          ></CardMedia>

          <Box
            sx={{
              height: "100px",
              width: "400px",
              borderRadius: "7px",
              backgroundColor: "#ffffff",
              pt: "9px",
              m: 0,
            }}
          >
            <Box>
              <Typography
                fontFamily="Montserrat"
                level="h1"
                sx={{
                  fontSize: "30px",
                  display: "flex",
                  justifyContent: "center",
                  width: "400px",
                  color: "#474747",
                  pb: "",
                }}
              >
                {productName.toUpperCase()}
              </Typography>
            </Box>

            {isHovering ? (
              <Box>
                <Typography
                  className="product-price"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#474747",
                  }}
                >
                  I WANT IT!
                </Typography>
              </Box>
            ) : (
              <Box>
                <Typography
                  className="product-price"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#474747",
                  }}
                >
                  {price}€ IVA inc.
                </Typography>
              </Box>
            )}
          </Box>
        </Card>
      </Box>
    </Link>
  );
}

export default ProductCard;
