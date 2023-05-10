import { useState } from "react";

import { Box, Typography } from "@mui/material";

import LoginCard from "../../components/LoginCard/LoginCard";

import loginBackground from "../../assets/backgrounds/login.jpg";
// import signupBackground from "../../assets/backgrounds/signup.jpg";

function AuthLogin() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        // borderRadius: 20,
        width: "100%",
        height: "100%",
        //margin: "auto",
        paddingTop: 15,
        paddingBottom: 20,
      }}
    >
      <Typography variant="h1" color="black" align="center">
        YOUR FLOWERS
      </Typography>
      <LoginCard />
    </Box>
  );
}

export default AuthLogin;
