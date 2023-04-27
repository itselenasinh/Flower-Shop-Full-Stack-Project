import React from "react";

function ShoppingCart({ cartList, removeAllProducts }) {
  let totalPrice = 0
  if (cartList.length > 0) {
    cartList.forEach((product) => {
      totalPrice += product.price
      console.log(product.price)
    })
  }
  return (
    <div className="cart">
      <div className="cartBox">
        <p>
          <b>PRODUCTS:</b> {cartList.length}
        </p>
        <p>
          <b>TOTAL:</b> {totalPrice} €
        </p>
        <button onClick={removeAllProducts}>Clean Cart</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
