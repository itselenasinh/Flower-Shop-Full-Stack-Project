import {
  Box,
  Grid,
  IconButton,
  Link,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { FooterTitle } from "./styles.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      sx={{
        positon: "absolute",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFE598",
        color: "#694736",
        p: { xs: 2, md: 4 },
        pt: 4,
        pb: "5px",
        fontSize: { xs: "13px", md: "15px" },
        mt: "80px",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.Lorem ipsum dolor sit amet cons adipisicing elit sed do
            eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud.Lorem ipsum dolor sit amet cons
            adipisicing elit sed do eiusm tempor incididunt ut labor et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </Typography>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Useful links</FooterTitle>
          <List>
            <Link
              to="/orders"
              color={"#694736"}
              lineHeight={2}
              variant="caption2"
            >
              <ListItemText>Order Tracking</ListItemText>
            </Link>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy & Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms & Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Popular Categories</FooterTitle>
          <List>
            <Link
              to="/shopping-cart"
              lineHeight={2}
              variant="caption2"
              color={"#694736"}
            >
              <ListItemText>My Cart</ListItemText>
            </Link>
            <Link
              to="/login"
              color={"#694736"}
              lineHeight={2}
              variant="caption2"
            >
              <ListItemText>My Account</ListItemText>
            </Link>
            <Link
              to="/wishlist"
              color={"#694736"}
              lineHeight={2}
              variant="caption2"
            >
              <ListItemText>Wishlist</ListItemText>
            </Link>
          </List>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle lineHeight={2} variant="body1">
            Follow, share, tag us!
          </FooterTitle>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.facebook.com/")}
          >
            <FacebookIcon sx={{ mr: 1, fontSize: "30px", color: "#694736" }} />
          </IconButton>
          <IconButton
            aria-label="Twitter.com"
            onClick={() => window.open("https://twitter.com/")}
          >
            <TwitterIcon sx={{ mr: 1, fontSize: "30px", color: "#694736" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.instagram.com/")}
          >
            <InstagramIcon sx={{ mr: 1, fontSize: "30px", color: "#694736" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.pinterest.es/")}
          >
            <PinterestIcon sx={{ mr: 1, fontSize: "30px", color: "#694736" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.youtube.com/")}
          >
            <YouTubeIcon sx={{ mr: 1, fontSize: "30px", color: "#694736" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
