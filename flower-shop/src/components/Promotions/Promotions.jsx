import { useEffect, useState } from "react";
import { MessageText, PromotionsContainer } from "./PromotionsStyles";
import { Box, Slide } from "@mui/material";

const messages = [
    "PEONY MADNESS STARTS HERE - FROM ONLY 9.99€!",
    "IT IS BLOOM! -30% WITH A CODE: 'LOVE'",
    "50% DISCOUNT ON ALL HOME & OFFICE PLANTS!",
];

export default function Promotions() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() =>{

        setTimeout(() => {
            setShow(false)
        },3000)


        const intervalId = setInterval (() => {
            setMessageIndex( i => (i + 1) % messages.length)
            setShow(true)

        setTimeout(() => {
            setShow(false)
        },3000)

        }, 4000)

        return () => {
            clearInterval(intervalId)
        }

    },[])

    return (
       <PromotionsContainer>
        <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
            enter:500,
            exit:100
         }}
        >
        <Box display={'flex'} justifyContent="center" alignItems={"center"}>
            <MessageText>
                {messages[messageIndex]}
            </MessageText>
        </Box>
        </Slide>
       </PromotionsContainer>
    )
}