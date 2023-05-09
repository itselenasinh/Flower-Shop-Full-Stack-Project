import Banner from "../../components/Banner/Banner";
//import { MainCarousel } from "../../components/Carousel/Carousel";
//import { ContactForm } from "../../components/Contact Form/ContactForm";
import Promotions from "../../components/Promotions/Promotions";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import CookieConsent from "react-cookie-consent";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";



function Home() {
  return <>
  <CookieConsent
    debug={true}
    location=""
    style={{ background: "rgb(0, 0, 0, 0.4)", color: "lightpink", }}
    buttonStyle={{ background: "#efe1e3",fontSize: "20px" }}
    expires={100}
    > <span style={{ fontSize: "20px" }}>
   This site uses cookies! Check out our <a href="/privacy">Privacy Policy</a> for more.</span>
  </CookieConsent>
  <Banner />
  <Promotions />
  <div className="about" >
      <Container>
      <Typography variant="h6">
       <p>There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.  It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
       <p>All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
      </Typography>
      </Container>
      </div>
  <Subscribe />
  
  <Footer />
  </>;
}

export default Home;
