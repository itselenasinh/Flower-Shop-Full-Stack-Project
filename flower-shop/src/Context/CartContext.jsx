import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

function CartContext({ children }) {
  
  const [cart, setCart] = useState([]);
  
  return (
    
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      {children}
    </ShoppingCartContext.Provider>
  
  );
}

export default CartContext;
