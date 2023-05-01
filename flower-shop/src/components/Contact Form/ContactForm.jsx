import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";


export const ContactForm = () => {

  return (
    <>
      <Typography gutterBottom variant="h4" align="center">
       SPECIAL EVENTS CONTACT FORM
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant='body2' color='textSecondary' component="p" gutterBottom> Fill the form and our team will get back to you within 24 hours.
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
                  <Button type="submit" variant="contained" color="secondary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
          </CardContent>
        </Card>
      </Grid>
      </>
  );
}

