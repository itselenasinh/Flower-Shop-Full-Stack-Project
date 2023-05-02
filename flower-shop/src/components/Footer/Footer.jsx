import {
  Box,
  Grid,
  IconButton,
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
//import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "gray",
        color: "white",
        p: { xs: 2, md: 4 },
        pt: 4,
        pb: 4,
        fontSize: { xs: "16px", md: "18px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
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
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
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
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
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
            <FacebookIcon sx={{ mr: 1, fontSize: "30px", color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="Twitter.com"
            onClick={() => window.open("https://twitter.com/")}
          >
            <TwitterIcon sx={{ mr: 1, fontSize: "30px", color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.instagram.com/")}
          >
            <InstagramIcon sx={{ mr: 1, fontSize: "30px", color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.pinterest.es/")}
          >
            <PinterestIcon sx={{ mr: 1, fontSize: "30px", color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.youtube.com/")}
          >
            <YouTubeIcon sx={{ mr: 1, fontSize: "30px", color: "white" }} />
          </IconButton>
        </Grid>

        {/*<FacebookIcon sx={{ mr: 1,  fontSize: "50px"}} />
          <TwitterIcon sx={{ mr: 1, fontSize: "50px" }} />
          <InstagramIcon sx={{ mr: 1, fontSize: "50px"}} />
          <PinterestIcon sx={{ mr: 1, fontSize: "50px" }} />
          <YouTubeIcon sx={{ mr: 1, fontSize: "50px" }} />
          </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle lineHeight={2} variant="body1">
            to receive Our Newsletter
          </FooterTitle>
          <Stack>
            <TextField 
             variant="standard"
            label="Email address" />
            <Button sx={{ mt: 2, mb: 2 }} variant="contained">
              Subscribe
            </Button>
          </Stack>
    </Grid>*/}
      </Grid>
    </Box>
  );
}
