import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Account(user) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 1500, minHeight: 500 }}>
      <CardContent>
        <div>
          <Typography variant="h3">PROFILE</Typography>
        </div>
        <Typography variant="h6" color="">
          Name
        </Typography>
        <div>
          <Typography variant="body1" color="">
            {user.fullName}
          </Typography>
        </div>

        <br></br>

        <Typography variant="h6" color="">
          Email
        </Typography>
        <div>
          <Typography variant="body1" color="">
            {user.email}
          </Typography>
        </div>

        <br></br>

        <Typography variant="h6" color="">
          Address
        </Typography>
        <div>
          <Typography variant="body1" color="">
            {user.address}
          </Typography>
        </div>

        <br></br>

        <Typography variant="h6" color="">
          Phone
        </Typography>
        <div>
          <Typography variant="body1" color="">
            {user.phone}
          </Typography>
        </div>

        <br></br>

        <div>
          <Button
            onClick={() => navigate(`/profile`)}
            variant="contained"
            sx={{ borderRadius: "5px" }}
          >
            Edit profile
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}

export default Account;
