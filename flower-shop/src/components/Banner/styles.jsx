import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


export const BannerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "0px 0px",
  backgroundImage: "lightpink",
  minWidth: "50px",
  maxWidth: "1500",
  height: "700px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const BannerImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minWidth: "50px",
  maxWidth: "1500",
  height: "700px",
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  color: "white",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerTitle = styled(Typography)(() => ({
  color: "white",
  lineHeight: 1.5,
  fontSize: "72px",
}));

export const BannerDescription = styled(Typography)(() => ({
  color: "white",
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
}));
