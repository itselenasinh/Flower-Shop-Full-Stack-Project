import { Box, Container } from "@mui/system";
import Footer from "../../components/Footer/Footer";
import { Typography, useMediaQuery } from "@mui/material";
import { ContactForm } from "../../components/Contact Form/ContactForm";
import image from "../../assets/About.avif";
import {
  BannerContainer,
  BannerDescription,
} from "../../components/Banner/styles";

function ContactUs() {
  const isNonMobile = useMediaQuery("min-width:600px");
  return (
    <Box>
      <div className="home">
        <BannerContainer style={{ backgroundImage: `url(${image})` }}>
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

          <BannerDescription variant="body1"></BannerDescription>
        </BannerContainer>
      </div>
      <div className="about">
        <Container>
          <Typography variant="h6">
            Flowers are the most beautiful way to express emotions and create
            unforgettable memories. In our flower shop, we specialize in making
            every special event something unique and memorable. Whether it's a
            wedding, an anniversary or any other occasion, our carefully
            designed floral arrangements will make your event unforgettable.
            Contact us today and let us help you turn your event into a floral
            masterpiece.
          </Typography>
        </Container>
      </div>
      <ContactForm />

      <Footer />
    </Box>
  );
}

export default ContactUs;
