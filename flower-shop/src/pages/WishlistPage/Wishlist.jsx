import { useContext } from "react";
import { WishlistProductsContext } from "../../Context/WishlistContext";
import { Box } from "@mui/material";
// import { Link } from 'react-router-dom'

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistProductsContext);
  console.log(wishlist);
  return (
    <Box>
      {wishlist.length === 0 ? (
        <p>No products on your wishlist</p>
      ) : (
        <ul>
          {wishlist.map((product) => (
            <li key={product.productName}>
              {product.productName}
              <button onClick={() => removeFromWishlist(product.productName)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* <Link to="/">Back to Home</Link> */}
    </Box>
  );
}

export default Wishlist;
