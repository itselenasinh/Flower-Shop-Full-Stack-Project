import { useState, createContext} from 'react'

 export const CartContext = createContext([])

function CartProvider({children}) {

    const [ cart, setCart ] = useState([])
    
    function addToCart(product) {
        setCart([...cart, product])
    }

    // const addProductsToCart = () => {
    //     setCart((currProducts) => {
    //       const isProductsFound = currProducts.find((product) => product.id === id );
    //       if (isProductsFound) {
    //         return currProducts.map((product) => {
    //           if (product.id === id) {
    //             return { ...product, quantity: product.quantity + 1 };
    //           } else {
    //             return product;
    //           }
    //         });
    //       } else {
    //         return [...currProducts, { id, quantity: 1, price }];
    //       }
    //     });
    //   };

    // const removeProduct = (id) => {
    //   setCart((currProducts) => {
    //     if(currProducts.find((product) => product.id === id)?.quantity === 1) {
    //       return currProducts.filter((product) => product.id !== id);
    //     } else {
    //       return currProducts.map((product) => {
    //         if(product.id === id) {
    //           return { ...product, quantity: product.quantity - 1 };
    //         } else {
    //           return product;
    //         }
    //       });
    //     }
    //   });
    // }

  return (
    <CartContext.Provider value={{addToCart, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider