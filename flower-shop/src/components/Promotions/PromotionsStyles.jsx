import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";



export const PromotionsContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    backgroundColor: "#002000"

}))

export const MessageText = styled(Typography)(() =>({
    fontFamily: "Montserrat",
    color: "#efe1e3",
    fontSize: '1.5rem'
}))