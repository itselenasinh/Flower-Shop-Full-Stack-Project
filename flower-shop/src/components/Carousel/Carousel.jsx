import {Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const images = [
  {
    imgPath:
      "https://cdn0.weddingwire.com/vendor/701740/original/1280/jpg/sand-and-stone-media-erin-and-sam-492-websize_51_47107-167605412780252.webp",
  },
  {
    imgPath:
      "https://cdn0.weddingwire.com/vendor/701740/3_2/1280/jpg/archerinspiredphotography-hannahandtroywedding-hollisterca-firstlookandformals-152_51_47107-167605410358658.webp",
  },
  {
    imgPath:
      "https://cdn0.weddingwire.com/vendor/701740/original/1280/jpg/garner-nestldownredwoodswedding-120_51_47107-159111653967416.webp",
  },
];

export const MainCarousel = () => {
  const isNonMobile = useMediaQuery("min-width:600px");

  return (
    <Carousel
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
           
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {images.map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture.imgPath}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
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
            <Typography variant="h1" color="#FFE598">
              DECORATIONS{" "}
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};
