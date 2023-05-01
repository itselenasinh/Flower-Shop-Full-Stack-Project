import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/CartContext";

function ProductCard({ id, productName, price, description, picture, stock }) {
 
  const navigate = useNavigate();
  const [cart, setCart] = useContext(ShoppingCartContext)

  function addToCart() {
    setCart((currProducts) => {
      const isProductsFound = currProducts.find((product) => product.id === id);
      if(isProductsFound) {
        return currProducts.map((product) => {
          if(product.id === id){
            return {...product, quantity: product.quantity + 1};
          } else {
            return product
          }
        });
      } else {
        return [...currProducts, {id, quantity: 1, price}]
      }
    });
  };

  function removeProduct() {
    setCart((currProducts) => {
      if(currProducts.find((product) => product.id === id)?.quantity === 1){
        return currProducts.filter((product) => product.id !== id);
      } else {
        return currProducts.map((product) => {
          if(product.id === id) {
            return {...product, quantity: product.quantity - 1};
          } else {
            return product;
          }
        });
      }
    });
  }

  function getQuantityById(id) {
    return cart.find((product) => product.id === id)?.quantity || 0;
  };

  const quantityPerProduct = getQuantityById(id)

  function viewProduct() {
    navigate('/products/categoryName/productName');
  }

  return (
    <>
    <div className="product-box">
      {
        quantityPerProduct > 0 && (
          <div className="product-quantity">{quantityPerProduct}</div>
        )
      }
        <h5>{productName}</h5>
        <div className="container">
          <img src={picture} alt="picture" style={{ width: "100%" }} />
          <p>{description}</p>
          <p className="product-price">{price + "€"}</p>
          {
            quantityPerProduct === 0 ? (
            <button className="product-add-button" onClick={() => addToCart()}>
            + Add to cart
          </button>
          ) : (
            <button className="product-plus-button" onClick={() => addToCart()}>
            + add more
          </button>
          )}
          {
            quantityPerProduct > 0 && (
            <button className="product-minus-button" onClick={() => removeProduct(id)}>
            remove product
          </button>)
          }
          <button className="product-add-button" onClick={() => addToCart()}>
            + Add to cart
          </button>
          <p>{stock}</p>
          {/* <p>{cartContext.cart}</p> */}
          <button onClick={viewProduct}>View product</button>
        </div>
      </div>
  </>
  );
}

export default ProductCard;
