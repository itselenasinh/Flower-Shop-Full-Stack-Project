import React from "react";
import SignupCard from "../../components/SignupCard/SignupCard";
import { Box, Typography } from "@mui/material";
import signupBackground from "../../assets/backgrounds/signup.jpg";

function AuthSignup() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${signupBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        // borderRadius: 20,
        //  width: "80%",
        width: "100%",
        //margin: "auto",
        paddingTop: 15,
        paddingBottom: 20,
      }}
    >
      <Typography variant="h1" color="black" align="center">
        YOUR FLOWERS
      </Typography>
      <SignupCard />
    </Box>
  );
}

export default AuthSignup;
