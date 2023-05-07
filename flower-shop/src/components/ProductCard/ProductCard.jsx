import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/CartContext";

import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, AspectRatio, Remove } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
// }));

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
  function viewQty() {
    return (
      quantityPerProduct > 0 && (
        <div className="product-quantity">{quantityPerProduct}</div>
      )
    );
  }

  return (
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
        sx={{
          width: "360px",
          height: "360px",
          p: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          resize: "horizontal",
          overflow: "hidden",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={picture}
          alt=""
        ></CardMedia>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <div>
              <Typography
                fontFamily="Montserrat"
                level="h2"
                sx={{
                  fontSize: "x-large",
                  pl: "20px",
                  width: "380px",
                  fontWeight: 700,
                }}
                mb={0.5}
              >
                {productName}
              </Typography>
            </div>

            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ ml: "auto", alignSelf: "flex-start" }}
            >
              <FavoriteBorderRoundedIcon color="danger" />
            </IconButton>
          </Box>
          <Typography>{description}</Typography>
          <Typography
            className="product-price"
            sx={{ pl: "20px", fontWeight: 700 }}
          >
            {price + "€"}
          </Typography>
          <Box>
            {viewQty()}
            <div>
              {quantityPerProduct === 0 ? (
                <Button
                  level="body2"
                  className="product-add-button"
                  onClick={() => addToCart()}
                >
                  <IconButton sx={{ backgroundColor: "none" }}>
                    <AddShoppingCartIcon />
                  </IconButton>
                </Button>
              ) : (
                <Button
                  className="product-plus-button"
                  onClick={() => addToCart()}
                >
                  <IconButton sx={{ backgroundColor: "none" }}>
                    <Add />
                  </IconButton>
                </Button>
              )}
              {quantityPerProduct > 0 && (
                <Button
                  fontWeight="lg"
                  level="body2"
                  className="product-minus-button"
                  onClick={() => removeProduct()}
                >
                  <IconButton sx={{ backgroundColor: "none" }}>
                    <Remove />
                  </IconButton>
                </Button>
              )}
              <p>{stock}</p>
              <Button onClick={() => viewProduct(productName)}>
                View product
              </Button>
            </div>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default ProductCard;
