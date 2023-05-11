import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent } from "./styles";
import { Box } from "@mui/system";
import videoPromo from "../../assets/videoPromo2.mp4";
import React from "react";

export default function Banner() {
  const isNonMobile = useMediaQuery("min-width:600px");

  return (
    <BannerContainer
      style={{ position: "relative", height: "100vh", width: "100vw" }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoPromo} type="video/mp4" />
      </video>

      <BannerContent>
        <Box
          color="white"
          padding="20px"
          borderRadius="1px"
          textAlign="center"
          backgroundColor="rgb(0, 0, 0, 0.4)"
          position="absolute"
          top="36%"
          left={isNonMobile ? "10%" : "0"}
          right={isNonMobile ? undefined : "0"}
          margin={isNonMobile ? undefined : "0 auto"}
          maxWidth={isNonMobile ? undefined : "750px"}
        >
          <Typography variant="h1" color="#efe1e3">
            NEW FLOWERS{" "}
          </Typography>
        </Box>
      </BannerContent>
    </BannerContainer>
  );
}
