import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle, BannerDescription } from "./styles";
import image from '../../assets/bann.avif'

export default function Banner() {

  return (
    
    <BannerContainer style={{ backgroundImage:`url(${image})` }}>

      <BannerContent>
        
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Flowers</BannerTitle>

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
  );
}
