import { createContext, useState } from "react";

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
