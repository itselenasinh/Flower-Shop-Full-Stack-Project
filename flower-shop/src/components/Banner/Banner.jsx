//import { useMediaQuery } from "@mui/material";
//import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage } from "./styles";

export default function Banner() {
  //const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>
        <BannerImage src="https://images.squarespace-cdn.com/content/v1/5d8ff52252a5d640815873ac/1572051183841-LB0EW6E632XWDGY0MHS2/MF-october-19-shoot-%2816-of-99%29_test.jpg"/>
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Flowers</BannerTitle>

        <BannerDescription variant="subtitle">
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
