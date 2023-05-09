import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../Context/AuthContext";
import { login } from "../../services/auth";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { Lock, VisibilityOff, Visibility, Email } from "@mui/icons-material";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [isLogged, setIsLogged] = useContext(AuthUserContext);

  const [isPassVisible, setIsPassVisible] = useState(false);

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
      setIsLogged(true);
      localStorage.setItem("token", apiResponse.data.token);
      localStorage.setItem("name", apiResponse.data.fullName);
      localStorage.setItem("email", apiResponse.data.email);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("Email or password wrong");
      }, 100);
    }
  }

  function goSignup() {
    return navigate("/signup");
  }
  return (
    <Card sx={{ maxWidth: "500px", borderRadius: 5 }}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <TextField
          onChange={(e) => updateEmail(e.target.value)}
          sx={{ mb: "20px" }}
          label="Email"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Email />
                </Icon>
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          onKeyDown={(e) => {
            if (e.key === "Enter") return onLogin();
          }}
          onChange={(e) => updatePassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
          type={isPassVisible ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setIsPassVisible((oldState) => !oldState);
                  }}
                >
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
        {errorMessage !== null && (
          <Typography color="red" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => goSignup()}>Signup</Button>
        <Button color="success" onClick={() => onLogin()}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
