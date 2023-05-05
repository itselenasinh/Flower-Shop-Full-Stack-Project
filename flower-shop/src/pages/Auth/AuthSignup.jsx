import React from "react";
import SignupCard from "../../components/SignupCard/SignupCard";
import { Box, Typography } from "@mui/material";
import signupBackground from "../../assets/backgrounds/signup.jpg";

function AuthSignup() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // backgroundImage: `url(${isLogin ? loginBackground : signupBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Typography variant="h1" color="black">
        YOUR FLOWERS
      </Typography>
      <SignupCard />
    </Box>
  );
}

export default AuthSignup;
