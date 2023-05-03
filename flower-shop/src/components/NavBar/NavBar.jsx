import { useContext, useState } from "react";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { indigo } from "@mui/material/colors";
const headerColor = indigo[200];
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import { Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material";
import { ShoppingCartContext } from "../../Context/CartContext";

const pages = ["About Us", "Products", "Special Events", "Contact Us"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorButton, setAnchorButton] = useState(null);

  const [cart, setCart] = useContext(ShoppingCartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProducts = (event) => {
    setAnchorButton(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleCloseProducts = () => {
    setAnchorButton(null);
    setIsMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: headerColor,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          mr: "10px",
          ml: "10px",
          pt: "5px",
          pb: "5px",
          pr: "0",
          pl: "0",
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { xs: "none", md: "flex" },
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          YOUR FLOWERS
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Button
                  component={Link}
                  key={page}
                  to={`/${page.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {page}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          YOUR FLOWERS
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: { xs: "row" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => {
            if (page === "Products") {
              return (
                <Button
                  onClick={handleOpenProducts}
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            } else {
              return (
                <Button
                  component={Link}
                  key={page}
                  to={`/${page.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            }
          })}
          <Menu
            open={isMenuOpen}
            anchorEl={anchorButton}
            onClose={handleCloseProducts}
          >
            <MenuItem component={Link} to="/products/bouquets">
              Bouquets
            </MenuItem>
            <MenuItem component={Link} to="/products/crowns">
              Crowns
            </MenuItem>
            <MenuItem component={Link} to="/products/garlands">
              Garlands
            </MenuItem>
            <MenuItem component={Link} to="/products/plants">
              Plants
            </MenuItem>
          </Menu>
        </Box>
        <SearchBar sx={{ display: "block" }} />
        <Box>
          <Link to={"/login"}>
            <Button sx={{ m: "0" }}>
              <Person2Outlined
                sx={{ color: "white", justifyContent: "space-around" }}
                variant="raised"
              ></Person2Outlined>
            </Button>
          </Link>
        </Box>
        <Link to={"/shopping-cart"}>
          <IconButton sx={{ backgroundColor: "none" }}>
            <ShoppingBagOutlined sx={{ color: "white" }} />
            <span
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                top: "0",
                right: "-2px",
                width: "20px",
                height: "20px",
                fontSize: "16px",
                backgroundColor: "pink",
                borderRadius: "20px",
                position: "absolute",
                color: "white",
              }}
            >
              {quantity}
            </span>
          </IconButton>
        </Link>
        {/* <h5 style={{ marginLeft: "20px" }}></h5> */}
      </Container>
    </AppBar>
  );
}

export default NavBar;
