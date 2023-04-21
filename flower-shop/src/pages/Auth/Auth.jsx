import React from "react";

import LoginCard from "../../components/LoginCard/LoginCard";
import { Box, Typography } from "@mui/material";

import loginBackground from "../../assets/backgrounds/login.webp";

function Auth() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Typography variant="h1" color="black">
        YOUR FLOWERS
      </Typography>
      <LoginCard />
    </Box>
  );
}

export default Auth;
