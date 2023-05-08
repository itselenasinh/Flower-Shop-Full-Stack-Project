import { Container } from "@mui/system";
import Footer from "../../components/Footer/Footer";
import { Typography } from "@mui/material";
import { ContactForm } from "../../components/Contact Form/ContactForm";
import image from '../../assets/About.avif'
import { BannerContainer, BannerContent, BannerDescription, BannerTitle } from "../../components/Banner/styles";


function ContactUs() {
  return (
    <>
     <div className="home">
     <BannerContainer style={{ backgroundImage:`url(${image})` }}>

      <BannerContent>
       
        <BannerTitle variant="h2">Contact Us</BannerTitle>

        <BannerDescription variant="body1">
          Lorem ipsum dolor sit amet. In totam deserunt non omnis animi sit
          possimus eveniet eos facilis ratione? Sed delectus consequatur et
          cupiditate totam aut autem placeat sit dolorem dolore est maxime
          ipsam? Aut consectetur beatae est eligendi illum eos temporibus
          quisquam quo enim perferendis ad labore maiores a deleniti quasi est
          molestias asperiores.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
    
     </div>
      <Container>
        <Typography variant="h5" align="center">Please fill in your question in detail and we will contact you ASAP but not later than 24 hours!</Typography>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}

export default ContactUs;
