//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
//import GithubIcon from "@material-ui/icons/GitHub";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerDescription } from "../Banner/styles";
import "./About.css";
import { Box } from "@mui/system";
import image from '../../assets/abb.avif'

function About() {

  const isNonMobile = useMediaQuery("min-width:600px");

  return (
    <div className="home">
     <BannerContainer style={{ backgroundImage:`url(${image})` }}>

     
      <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="36%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "750px"}
          >
            <Typography variant="h1" color="#8FC857">
             ABOUT US{" "}
            </Typography>
          
          </Box>

        <BannerDescription variant="body1">
          
        </BannerDescription>
     
    </BannerContainer>
     </div>
     

  );
}

export default About;
