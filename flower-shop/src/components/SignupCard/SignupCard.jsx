import { useState } from "react";

import { signup } from "../../services/auth";

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
} from "@mui/material";

function SignupCard({ changeToLogin }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSignup() {
    const dataInSignup = {
      userName,
      email,
      password,
    };
    const apiResponse = await signup(dataInSignup);
    console.log(apiResponse);
  }

  return (
    <Card sx={{ maxWidth: "500px" }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          label="User name"
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
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => changeToLogin()}>Login</Button>
        <Button color="success" onClick={() => onSignup()}>
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
}

export default SignupCard;
