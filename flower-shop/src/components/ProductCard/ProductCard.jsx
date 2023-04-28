import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ productName, price, description, picture, stock }) {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  function viewProduct() {
    navigate('/products/:categoryName/productName');
  }

  return (
    <div className="card">
      <div className="singleCard">
        <h5>{productName}</h5>
        <div className="container">
          <img src={picture} alt="picture" style={{ width: "100%" }} />
          <p>{description}</p>
          <p>{price + "€"}</p>
          <button onClick={() => cartContext.addToProduct()}>
            Add Product
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
