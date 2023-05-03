import { useState } from "react";

import { Box, Typography } from "@mui/material";

import LoginCard from "../../components/LoginCard/LoginCard";

import loginBackground from "../../assets/backgrounds/login.webp";
import signupBackground from "../../assets/backgrounds/signup.jpg";

function AuthLogin() {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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

export default AuthLogin;
