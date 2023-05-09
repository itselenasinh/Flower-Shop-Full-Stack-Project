import emailjs from "@emailjs/browser";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    const data = { name, email, number, message };

    console.log(name);

    emailjs.send("contact_service", "template_ru0grdp", { data }).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
  }

  return (
    <>
      <Grid>
        <Card
          style={{
            minWidth: "50px",
            maxWidth: "2000px",
            height: "700px",
            padding: "20px 5px",
            margin: "0 auto",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h4">
              Contact Us
            </Typography>

            <Typography
              variant="h6"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet.
            </Typography>

            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Your first name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Your last name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Your email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="Your phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={8}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
