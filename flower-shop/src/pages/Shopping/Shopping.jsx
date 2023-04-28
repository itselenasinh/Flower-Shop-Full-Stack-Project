import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


function Shopping() {
  
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

return (
    <div>
      <div>Products in cart: {quantity}</div>
      <div>Total:{totalPrice}€</div>
      <button onClick={() => console.log(cart)}>Checkout</button>
    </div>
  );
}

export default Shopping;
