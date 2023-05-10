import React, { useContext, useState } from "react";
import { WishlistProductsContext } from "../../Context/WishlistContext";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FavoriteBorderRounded, FavoriteOutlined } from "@mui/icons-material";
// import { Link } from 'react-router-dom'

function Wishlist() {
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();

  const { wishlist, removeFromWishlist } = useContext(WishlistProductsContext);
  console.log(wishlist);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Box>
      {wishlist.length === 0 ? (
        <p>No products on your wishlist</p>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenlty",
            padding: "50px",
          }}
        >
          {wishlist.map((product) => (
            <Box
              key="box"
              sx={{
                display: "flex",
                justifyContent: "space-evenlty",
                padding: "50px",
              }}
            >
              <Card
                variant="outlined"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                  width: "200px",
                  height: "300px",
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
                {" "}
                <Link
                  to={`/products/category/${product.productName}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardMedia
                    component="img"
                    alt=""
                    image={product.picture}
                    sx={{
                      height: "200px",
                      width: "200px",
                      backgroundColor: "lightBeige",
                      transition: "transform 0.3s, border 0.3s",
                      "&:hover": {
                        transform: "scale(1.1, 1.1)",
                      },
                    }}
                  ></CardMedia>
                </Link>
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    backgroundColor: "none",
                    color: "grey",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    removeFromWishlist(product.productName);
                  }}
                >
                  <FavoriteOutlined />
                </IconButton>
                <Box
                  sx={{
                    height: "50px",
                    width: "300px",
                    borderRadius: "7px",
                    backgroundColor: "lightBeige",
                    pt: "9px",
                    m: 0,
                  }}
                >
                  <Box>
                    <Typography
                      fontFamily="Montserrat"
                      level="h2"
                      sx={{
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                        width: "300px",
                        backgroundColor: "lightBeige",
                        color: "#474747",
                        pb: "",
                      }}
                    >
                      {product.productName}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      className="product-price"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "15px",
                        color: "#474747",
                      }}
                    >
                      {product.price}€ IVA inc.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      )}

      {/* <Link to="/">Back to Home</Link> */}
    </Box>
  );
}

export default Wishlist;
