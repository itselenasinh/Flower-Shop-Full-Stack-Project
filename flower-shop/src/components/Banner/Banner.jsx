import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent } from "./styles";
import image from '../../assets/bann.avif'
import { Box } from "@mui/system";
export default function Banner() {

  const isNonMobile = useMediaQuery("min-width:600px");

  return (
    
    <BannerContainer style={{ backgroundImage:`url(${image})` }}>

      <BannerContent>
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
            <Typography variant="h1" color="#efe1e3">
              NEW FLOWERS{" "}
            </Typography>
          
          </Box>

      </BannerContent>
    </BannerContainer>
  );
}
