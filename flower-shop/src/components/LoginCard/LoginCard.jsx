import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/auth";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

function LoginCard({ changeToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function updateEmail(inputValue) {
    setEmail(inputValue);
  }

  function updatePassword(inputValue) {
    setPassword(inputValue);
  }

  async function onLogin() {
    const dataInLogin = {
      email,
      password,
    };
    try {
      const apiResponse = await login(dataInLogin);
      localStorage.setItem("token", apiResponse.data.token);
      console.log(apiResponse);
      //navigate("/home");
    } catch (error) {
      setErrorMessage(error.response.data);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }

  return (
    <Card sx={{ maxWidth: "500px" }}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <TextField
          onChange={(e) => updateEmail(e.target.value)}
          sx={{ mb: "20px" }}
          label="Email"
          variant="outlined"
          fullWidth
        ></TextField>
        <TextField
          onKeyDown={(e) => {
            if (e.key === "Enter") return onLogin();
          }}
          onChange={(e) => updatePassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
        ></TextField>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => changeToSignup()}>Signup</Button>
        <Button onClick={() => onLogin()}>Login</Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
