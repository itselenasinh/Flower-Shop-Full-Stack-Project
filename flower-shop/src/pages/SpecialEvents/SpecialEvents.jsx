import { Button, Typography } from "@mui/material";
import { MainCarousel } from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import { Container } from "@mui/system";

function SpecialEvents() {
  return (
    <>
      <MainCarousel />
      <div className="about">
        <Container>
          <Typography variant="h6">
            <p>
              Flowers are the most beautiful way to express emotions and create
              unforgettable memories. In our flower shop, we specialize in
              making every special event something unique and memorable. Whether
              it's a wedding, an anniversary or any other occasion, our
              carefully designed floral arrangements will make your event
              unforgettable. Contact us today and let us help you turn your
              event into a floral masterpiece.
            </p>
            <p>
              Don't let the planning of your special event overwhelm you. At our
              flower shop, we're here to make the process of selecting and
              designing your floral arrangements easy and hassle-free. With our
              personalized attention and our passion for flowers, we'll help you
              create a floral experience that you'll remember forever. Contact
              us today and let us make your event magical with the beauty of
              flowers!
            </p>
          </Typography>
        </Container>
        <Button
          href="/contact-us"
          type="submit"
          variant="contained"
          size="large"
          style={{ backgroundColor: "#D5E7B8", color: "#254E25" }}
        >
          Contact Us
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default SpecialEvents;
