import React, { createContext, useState } from 'react'

export const WishlistProductsContext = createContext()

function WishlistContext ({ children }) {

    const [wishlist, setWishlist] = useState([])

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product])
    }

    const removeFromWishlist = (productName) => {
        const newWishlist = wishlist.filter((product) => product.productName !== productName)
        setWishlist(newWishlist)
    }


    return (
        <WishlistProductsContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistProductsContext.Provider>
    )
}
export default WishlistContext 