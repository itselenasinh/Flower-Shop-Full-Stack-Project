import { createContext, useState, useEffect } from "react";
import { getChekout, createCheckoutOrder } from "../services/apiFlower";
function CheckoutContext({ children }) {
  const [checkout, setCheckout] = useState([]);

  const addToCheckout = (product) => {
    setCheckout((oldCheckout) => [...oldCheckout, product]);
  };

  return (
    <CheckoutContext.Provider value={{ addToCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContext;
