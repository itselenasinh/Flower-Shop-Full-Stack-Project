import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BannerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "0px 0px",
  backgroundColor: "lightpink",
}));

export const BannerImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  minWidth: "300px",
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerTitle = styled(Typography)(() => ({
  lineHeight: 1.5,
  fontSize: "72px",
}));

export const BannerDescription = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
}));
