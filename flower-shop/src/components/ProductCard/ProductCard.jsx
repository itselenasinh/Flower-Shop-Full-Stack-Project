import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, productName, price, description, picture, stock }) {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  function viewProduct() {
    navigate('/products/categoryName/productName');
  }

  const {cart} = useContext(CartContext);

  // const addToCart = () => {
  //   setCart((currProducts) => {
  //     const isProductsFound = currProducts.find((product) => product.id === id);
  //     if (isProductsFound) {
  //       return currProducts.map((product) => {
  //         if (product.id === id) {
  //           return { ...product, quantity: product.quantity + 1 };
  //         } else {
  //           return product;
  //         }
  //       });
  //     } else {
  //       return [...currProducts, { id, quantity: 1, price }];
  //     }
  //   });
  // };

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

  const getQuantityById = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  }

  const quantityPerProduct = getQuantityById(id)

  return (
    <div className="card">
      { quantityPerProduct > 0 && ( <div className="product-quantity">{quantityPerProduct}</div>)}
      <div key={id} className="singleCard">
        <h5>{productName}</h5>
        <div className="container">
          <img src={picture} alt="picture" style={{ width: "100%" }} />
          <p>{description}</p>
          <p>{price + "€"}</p>
          <button onClick={() => cartContext.addToCart()}>
            + Add to cart
          </button>
          <p>{stock}</p>
          <p>{cartContext.cart}</p>
          <button onClick={viewProduct}>View product</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
