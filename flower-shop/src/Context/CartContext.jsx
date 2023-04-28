import { useState, createContext} from 'react'

 export const CartContext = createContext([])

function CartProvider({children}) {

    const [ cart, setCart ] = useState([])
    
    function addToCart(product) {
        setCart([...cart, product])
    }

  return (
    <CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider