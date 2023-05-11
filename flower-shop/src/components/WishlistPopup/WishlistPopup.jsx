import React, { useEffect, useState } from "react";
import wishlistPopup from "../../assets/popup/wishlistPopup.jpg";
import { HighlightOffOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";

function WishlistPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          backgroundImage: `url(${wishlistPopup})`,
          backgroundSize: "350px",
          height: "300px",
          width: "300px",
          border: "solid white",
        }}
      >
        <Box sx={{ fontSize: "large", color: "white" }}>
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", top: 6, right: 0, color: "white" }}
          >
            <HighlightOffOutlined />
          </Button>
        </Box>
        <br></br>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "Black",
          }}
        >
          <Typography fontSize="27px">
            Ups! You need to log in to add products on your wishlist
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default WishlistPopup;
