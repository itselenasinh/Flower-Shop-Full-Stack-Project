import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const images = [
    {
      imgPath:
        "https://img.freepik.com/premium-photo/ceremony-arch-wedding-arch-wedding-wedding-moment-decorations-decor-wedding-decorations_543567-2387.jpg",
    },
    {
      imgPath:
        "https://img.freepik.com/premium-photo/white-wedding-cake-with-flower_33799-527.jpg",
    },
    {
      imgPath:
        "https://img.freepik.com/free-photo/big-bouquet-with-white-roses-eucalyptus-stand-table_8353-9838.jpg?t=st=1682878383~exp=1682878983~hmac=33680bea2b6f3ed9c033edbfbb74f76d166aa4de9926140f102335724de9d65f",
    }
  ];


export const MainCarousel = () => {
 const isNonMobile = useMediaQuery("min-width:600px")

 return(
    <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler) => (
            <IconButton onClick={onClickHandler}
            sx={{
                position: "absolute",
                top:"50%",
                left: "0",
                color: "white",
                padding: "5px",
                zIndex: "10"
            }}
            >
                <NavigateBeforeIcon sx={{ fontSize: 40 }} />
            </IconButton>
        )}
        renderArrowNext={(onClickHandler) => (
            <IconButton onClick={onClickHandler}
            sx={{
                position: "absolute",
                top:"50%",
                right: "0",
                color: "white",
                padding: "5px",
                zIndex: "10"
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
                backgroundAttachment: "fixed"
            }}
            />
            <Box 
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : '0'}
            right={isNonMobile ? undefined : '0'}
            margin={isNonMobile ? undefined : '0 auto'}
            maxWidth={isNonMobile ? undefined : '240px'}
            >
             <Typography color="white">UNIQUE FLOWER</Typography> 
             <Typography variant="h1" color="white">DECORATIONS </Typography> 
             <Typography fontWeight="bold" color="white" sx={{textDecoration: "underline"}}>OF SPECIAL EVENTS</Typography> 
            
            </Box>
           </Box>


            ))}
    </Carousel>
 )
}