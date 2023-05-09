import { useContext } from "react";
import { CheckoutContext } from "../../Context/CheckoutContext";
import { Box } from "@mui/material";

function Checkout() {
  const { Checkout, addToCheckout } = useContext(CheckoutContext);
  return (
    <Box>
      <div>Checkout</div>;
    </Box>
  );
}

export default Checkout;
