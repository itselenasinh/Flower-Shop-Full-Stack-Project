import { useState, useRef } from "react";

import { signup } from "../../services/auth";

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";

function SignupCard({ changeToLogin }) {
  const passwordRef = useRef(null);
  const passwordCorfirmRef = useRef(null);

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCorfirm, setpasswordCorfirm] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");

  const [isPassVisible, setIsPassVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordCorfirm) {
      console.log(`password don't match `);
      return;
    }
    const dataInSignup = {
      fullName,
      email,
      password,
      address,
      phone,
    };
    signup(dataInSignup)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  return (
    <Card sx={{ maxWidth: "500px" }}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Sign Up" />
        <CardContent>
          <TextField
            onChange={(e) => setfullName(e.target.value)}
            label="Your name"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth={true}
            inputRef={passwordRef}
            sx={{ marginBottom: "20px" }}
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
          />
          <TextField
            onChange={(e) => setpasswordCorfirm(e.target.value)}
            label="Repeat password"
            type="password"
            variant="outlined"
            fullWidth={true}
            inputRef={passwordCorfirmRef}
            sx={{ marginBottom: "20px" }}
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
          />
          <TextField
            onChange={(e) => setaddress(e.target.value)}
            label="Address"
            type="address"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            onChange={(e) => setphone(e.target.value)}
            label="Phone"
            type="phone"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: "20px" }}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => changeToLogin()}>Login</Button>
          <Button type="submit" color="success">
            Sign Up
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}

export default SignupCard;
