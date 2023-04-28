import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function ProductCard({ productName, price, description, picture, stock, }) {

  const cartContext = useContext(CartContext)

  return (
    <div className="card">
      <div className="singleCard">
        <h5>{productName}</h5>
        <div className="container">
          <img src={picture} alt="picture" style={{ width: "100%" }} />
          <p>{description}</p>
          <p>{price + '€'}</p>
          <button onClick={() => cartContext.addToProduct('Hola')}>Add Product</button>
          <p>{stock}</p>
          <p>{cartContext.cart}</p>
          <p>hola</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
