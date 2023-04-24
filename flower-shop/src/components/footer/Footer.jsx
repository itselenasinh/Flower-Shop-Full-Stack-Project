/* eslint-disable react/jsx-key */
//import React from "react"
import { Box, Grid, Container, Typography, Button } from "@mui/material";

function Footer() {
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
        <div className="footer">
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
        </div>
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
    <footer>
      <Box
        bgcolor="violet"
        color="white"
        padding={2}
        
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
        textAlign={"center"}
        py={2}
        m={0}
      >
        <Container fluid>
          <Grid container spacing={5} margin={5}>
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
        py={2}
        m={0}
      >
        <Typography>
          © Reboot Academy 2023 - <small>All Rights Reserved</small>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
