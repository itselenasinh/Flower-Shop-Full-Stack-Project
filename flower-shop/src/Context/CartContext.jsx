import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext(null);

function CartContext({ children }) {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log(savedCart)
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  
  return (
    
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      {children}
    </ShoppingCartContext.Provider>
  
  );
}

export default CartContext;
