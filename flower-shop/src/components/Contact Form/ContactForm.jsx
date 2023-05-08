import emailjs from '@emailjs/browser';
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState } from 'react';


export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
 
  const data = {name, email, number, message}

  var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};


    emailjs.send('contact_service', 'template_ru0grdp', {data}, templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(err) {
      console.log('FAILED...', err);
   });

  return (
    <>   
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant='body2' color='textSecondary' component="p" gutterBottom> Fill the form and our team will get back to you
          </Typography> 
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Your first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Your last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Your email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Your phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="secondary" fullWidth onSubmit={data} >Submit</Button>
                </Grid>

              </Grid>
          </CardContent>
        </Card>
      </Grid>
      </>
  );
}
