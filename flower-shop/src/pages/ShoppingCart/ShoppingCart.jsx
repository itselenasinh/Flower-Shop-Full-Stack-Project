import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/CartContext'

function ShoppingCart() {
  const {cart} = useContext(ShoppingCartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0)

  return (
    <div>
      <div>Items in cart: {quantity}</div>
      <div>Total: {totalPrice}€</div>
      <button onClick={() => console.log(cart)}>Checkout</button>
    </div>
  )
}

export default ShoppingCart
