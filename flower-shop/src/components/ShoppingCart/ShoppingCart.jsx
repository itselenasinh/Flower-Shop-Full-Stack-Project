import { IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import React from "react";

function ShoppingCart() {
  return (
    <div>
      <IconButton sx={{ backgroundColor: "none" }}>
        <ShoppingBagOutlinedIcon sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
}

export default ShoppingCart;
