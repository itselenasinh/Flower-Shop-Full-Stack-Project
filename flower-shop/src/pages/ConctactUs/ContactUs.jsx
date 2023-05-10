import { Box, Container } from "@mui/system";
import Footer from "../../components/Footer/Footer";
import { Typography, useMediaQuery } from "@mui/material";
import { ContactForm } from "../../components/Contact Form/ContactForm";
import image from '../../assets/About.avif'
import { BannerContainer, BannerDescription } from "../../components/Banner/styles";


function ContactUs() {
  const isNonMobile = useMediaQuery("min-width:600px");
  return (
    <Box>
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
            <Typography variant="h1" color="#EED2B5">
              CONTACT US{" "}
            </Typography>
          
          </Box>

        <BannerDescription variant="body1">
          
        </BannerDescription>
     
    </BannerContainer>
     </div>
      <div className="about" >
        <Container>
      <Typography variant="h6">
       There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isnt
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </Typography>
      </Container>
      </div>
        <ContactForm />
    
      <Footer />
    </Box>
  );
}

export default ContactUs;
