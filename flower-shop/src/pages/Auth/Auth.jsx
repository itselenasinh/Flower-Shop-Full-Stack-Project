import { useState } from "react";

import { Box, Typography } from "@mui/material";

import LoginCard from "../../components/LoginCard/LoginCard";
import SignupCard from "../../components/SignupCard/SignupCard";

import loginBackground from "../../assets/backgrounds/login.webp";
import signupBackground from "../../assets/backgrounds/signup.jpg";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleLoginSignup() {
    setIsLogin((oldState) => !oldState);
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${isLogin ? loginBackground : signupBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Typography variant="h1" color="black">
        YOUR FLOWERS
      </Typography>
      {isLogin ? (
        <LoginCard changeToSignup={toggleLoginSignup} />
      ) : (
        <SignupCard changeToLogin={toggleLoginSignup} />
      )}
    </Box>
  );
}

export default Auth;
