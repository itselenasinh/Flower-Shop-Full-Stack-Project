import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundProfile from '../../assets/profile/backgroundProfile.jpg'
import { EditOutlined } from "@mui/icons-material";

function Account(user) {
  const navigate = useNavigate();
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignContent: 'center',
      minHeight: 500,
      maxWidth: 1500,
      backgroundImage: `url(${backgroundProfile})`,
      backgroundSize: 'cover',
      pt: '150px',
      pb: '150px',
      pl: '200px'
      
    }}>
    <Card
      sx={{
        width: "700px",
        height: "cover",
        borderRadius: "7px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        overflow: "hidden",
        gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
        boxShadow: "none",
        position: "relative",
        backgroundColor: 'transparent'
      }}
    >
      <CardContent>
        <Typography variant="h6" color="">
          Name 
        </Typography>
        <div>
          
          <Typography variant="body1" color="black" align="right" sx={{pt: "30px"}}>
           {user.fullName} <EditOutlined sx={{fontSize: 'medium'}}/>
          </Typography>
        </div>

        <Divider/>

        <Typography variant="h6" color="" sx={{pt: "20px"}}>
          Email
        </Typography>
        <div>
          <Typography variant="body1" color="" align="right" sx={{pt: "30px"}}>
            {user.email} <EditOutlined sx={{fontSize: 'medium'}}/>
          </Typography>
        </div>

        <Divider/>

        <Typography variant="h6" color="" sx={{pt: "20px"}}>
          Address
        </Typography>
        <div>
          <Typography variant="body1" color="" align="right" sx={{pt: "30px"}}>
            {user.address} <EditOutlined sx={{fontSize: 'medium'}}/>
          </Typography>
        </div>

        <Divider/>

        <Typography variant="h6" color="" sx={{pt: "20px"}}>
          Phone
        </Typography>
        <div>
          <Typography variant="body1" color="" align="right" sx={{pt: "30px"}}>
            {user.phone} <EditOutlined sx={{fontSize: 'medium'}}/>
          </Typography>
        </div>

        <Divider/>

        <Box sx={{ pt: '30px', display: 'flex', justifyContent: 'flex-end' }}
          > 
          <Button
            onClick={() => navigate(`/profile`)}
          
            sx={{color: "#254E25", border:" solid #D5E7B8", backgroundColor: "#D5E7B8", borderRadius: "16px", "&:hover": {
              
              backgroundColor: "#ff6961",
              borderColor: "#ff6961",
              color: 'white'
            }, }}
          >
            Delete account
          </Button>
        </Box>
      </CardContent>
    </Card>
    </Box>
  );
}

export default Account;
