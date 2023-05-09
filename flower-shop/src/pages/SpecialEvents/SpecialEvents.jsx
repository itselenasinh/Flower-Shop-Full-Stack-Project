import { Button, Typography } from "@mui/material";
import { MainCarousel } from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import { Container } from "@mui/system";


function SpecialEvents() {
  return (
    <>
      <MainCarousel />
      <div className="about" >
        <Container>
      <Typography variant="h6">
       <p>There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
        <p>There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isnt
        anything embarrassing hidden in the middle of text. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.</p> 
      </Typography>
      </Container>
      <Button href="/contact-us" type="submit" variant="contained" color="success" size="large">
       Contact Us
      </Button>
      </div>
      <Footer />
    </>
  );
}

export default SpecialEvents;
