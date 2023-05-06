import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext(null);

function CartContext({ children }) {
  
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log(savedCart)
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      {children}
    </ShoppingCartContext.Provider>
  
  );
}

export default CartContext;
