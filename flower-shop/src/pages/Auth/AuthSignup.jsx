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
        margin: "auto",
        paddingTop: "50px",
        paddingBottom: "50px",
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
