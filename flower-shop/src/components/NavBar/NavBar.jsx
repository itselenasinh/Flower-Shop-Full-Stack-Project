import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";

import SearchBar from "../SearchBar/SearchBar";
import {
  AccountCircleOutlined,
  BookmarkAddOutlined,
  FavoriteBorderOutlined,
  LogoutOutlined,
  Person2Outlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { ShoppingCartContext } from "../../Context/CartContext";
import { AuthUserContext } from "../../Context/AuthContext";

const pages = ["About Us", "Products", "Special Events", "Contact Us"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorButton, setAnchorButton] = useState(null);

  const [isLogOpen, setIsLogOpen] = useState(false);
  const [aButton, setAButton] = useState(null);

  const [isLogged, setIsLogged] = useContext(AuthUserContext);

  const navigate = useNavigate()

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

  const handleCloseLog = () => {
    setAButton(null);
    setIsLogOpen(false);
  };

  const handleOpenLog = (event) => {
    setAButton(event.currentTarget);
    setIsLogOpen(true);
  };

  

  async function onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLogged(false);
    navigate("/login");
    handleCloseLog()
  }



  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#EED2B5",
        alignItems: "center",
        textAlign: "center",
        color: "#694736",
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
        <Link to='/'>
        <Typography
          variant="h6"
          noWrap
          style={{ textDecoration: 'none'}}
          sx={{
            display: { xs: "none", md: "flex" },
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            "&:hover": { color: "#254E25" },
          }}
        >
          YOUR FLOWERS
        </Typography></Link>
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
        <Link to='/'>
        <Typography
          variant="h5"
          fontFamily="Montserrat"
          noWrap
          style={{ textDecoration: 'none'}}
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          YOUR FLOWERS
        </Typography></Link>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: { xs: "row" },
            justifyContent: "center",
            color: "#694736 ",
            fontFamily: "Montserrat-Alternates",
          }}
        >
          {pages.map((page) => {
            if (page === "Products") {
              return (
                <Button
                  onClick={handleOpenProducts}
                  key={page}
                  sx={{
                    my: 2,
                    color: "#694736 ",
                    "&:hover": { color: "#254E25" },
                    display: "block",
                  }}
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
                  sx={{
                    my: 2,
                    color: "#694736 ",
                    "&:hover": { color: "#254E25" },
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              );
            }
          })}
          <Menu
            MenuListProps={{ onMouseLeave: handleCloseProducts }}
            open={isMenuOpen}
            anchorEl={anchorButton}
            onClose={handleCloseProducts}
          >
            <MenuItem onClick={() => {handleCloseProducts()}} 
              component={Link}
              to="/products/bouquets"
              sx={{ backgroundColor: "#8FC857" }}
            >
              Bouquets
            </MenuItem>
            <MenuItem onClick={() => {handleCloseProducts()}}  component={Link} to="/products/crowns">
              Crowns
            </MenuItem>
            <MenuItem onClick={() => {handleCloseProducts()}}  component={Link} to="/products/garlands">
              Garlands
            </MenuItem>
            <MenuItem onClick={() => {handleCloseProducts()}}  component={Link} to="/products/plants">
              Plants
            </MenuItem>
          </Menu>
        </Box>
        <SearchBar />

        <Box>
          {isLogged ? (
            <>
              <Button
                id="logButton"
                aria-controls={isLogOpen ? "logMenu" : undefined}
                onClick={handleOpenLog}
                sx={{
                  my: 2,
                  color: "#694736 ",
                  "&:hover": { color: "#254E25" },
                  display: "block",
                }}
              >
                {`Hi, ${localStorage.getItem("name")}!`}
              </Button>
              <Menu
                id="logMenu"
                open={isLogOpen}
                aria-labelledby="logButton"
                anchorEl={aButton}
                onClose={handleCloseLog}
              >
                <MenuItem component={Link} to="/profile">
                  <ListItemIcon>
                    <AccountCircleOutlined fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/wishlist">
                  <ListItemIcon>
                    <FavoriteBorderOutlined fontSize="small" />
                  </ListItemIcon>
                  Wish list
                </MenuItem>
                <MenuItem component={Link} to="/orders">
                  <ListItemIcon>
                    <BookmarkAddOutlined fontSize="small" />
                  </ListItemIcon>
                  My orders
                </MenuItem>
                <MenuItem
                onClick={onLogout}> 
                  <ListItemIcon>
                    <LogoutOutlined fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link to={"/login"}>
              <Button sx={{ m: "0" }}>
                <Person2Outlined
                  sx={{
                    color: "#694736",
                    "&:hover": { color: "#254E25" },
                    justifyContent: "space-around",
                  }}
                  variant="raised"
                ></Person2Outlined>
              </Button>
            </Link>
          )}
        </Box>
        <Link to={"/shopping-cart"}>
          <IconButton sx={{ backgroundColor: "none" }}>
            <ShoppingBagOutlined
              sx={{ color: "#694736 ", "&:hover": { color: "#254E25" } }}
            />
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
                backgroundColor: "#FFE598",
                opacity: "0.8",
                borderRadius: "20px",
                position: "absolute",
                color: "#694736",
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
