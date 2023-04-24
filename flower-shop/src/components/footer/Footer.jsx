/* eslint-disable react/jsx-key */
//import React from "react"
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import "./Footer.css";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  const elements = [
    {
      header: "Contact us",
      links: ["Address", "Customer Service"],
    },
    {
      header: "Legal",
      links: ["Terms & Conditiones", "Privacy Policy", "Cookie Policy"],
    },
    {
      header: "Follow us",
      links: ["Facebook", "Instagram", "Pinterest"],
    },
  ];

  function generateFooterElements() {
    const footerElements = elements.map((column) => {
      return (
        <Grid item xs={12} md={4}>
          <Box borderBottom={1}>
            <Button sx={{ color: "white", fontWeight: "bold" }}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link) => {
            return (
              <Box>
                <Button sx={{ color: "white" }}>{link}</Button>
              </Box>
            );
          })}
        </Grid>
      );
    });
    return footerElements;
  }

  /*function generateLinks(linksArray) {
    const boxes = linksArray.map((link) => {
      return <Box>{link}</Box>;
    });
    return boxes;
  }*/

  return (
    <>
      <Box
        bgcolor="violet"
        color="white"
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "20px",
          pb: '20px',
          position: "fixed",
          bottom: 0,
          width: '100%'
        }}
        textAlign={"center"}
        py={0}
        m={0}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
            columnSpacing={4}
            rowSpacing={0}
          >
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box
        bgcolor="black"
        color={"white"}
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
        textAlign={"center"}
        py={0}
        m={0}
      >
        <Typography>
          © Your Flowers {year} - <small>All Rights Reserved</small>
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
