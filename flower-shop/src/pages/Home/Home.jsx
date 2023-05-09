import Banner from "../../components/Banner/Banner";
//import { MainCarousel } from "../../components/Carousel/Carousel";
//import { ContactForm } from "../../components/Contact Form/ContactForm";
import Promotions from "../../components/Promotions/Promotions";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import CookieConsent from "react-cookie-consent";



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
  <Subscribe />
  
  <Footer />
  </>;
}

export default Home;
