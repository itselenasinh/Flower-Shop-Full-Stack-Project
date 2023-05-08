import Banner from "../../components/Banner/Banner";
//import { MainCarousel } from "../../components/Carousel/Carousel";
//import { ContactForm } from "../../components/Contact Form/ContactForm";
import Promotions from "../../components/Promotions/Promotions";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
  return <>
  <Banner />
  <Promotions />
  <Subscribe />
  </>;
}

export default Home;
