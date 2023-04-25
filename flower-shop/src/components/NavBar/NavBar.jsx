import { useState } from "react";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import SearchBar from "../SearchBar/SearchBar";

const pages = ["About Us", "Products", "Especial Events", "Contact Us"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorButton, setAnchorButton] = useState(null);

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
      position="static"
      sx={{
        backgroundColor: headerColor,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
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
                  <Button key={page} href={`/${page.toLowerCase()}`}>
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
          <SearchBar />
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
                    key={page}
                    href={`/${page.toLowerCase()}`}
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
              <MenuItem component={Link} to="/products-bouquets">
                Bouquets
              </MenuItem>
              <MenuItem component={Link} to="/products-crowns">
                Crowns
              </MenuItem>
              <MenuItem component={Link} to="/products-garlands">
                Garlands
              </MenuItem>
              <MenuItem component={Link} to="/products-plants">
                Plants
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Link to={"/login"}>
              <Button>
                <AccountBoxOutlinedIcon
                  sx={{ color: "white", justifyContent: "space-around" }}
                  variant="raised"
                ></AccountBoxOutlinedIcon>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
