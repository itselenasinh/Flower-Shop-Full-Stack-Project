import React from "react";

function ProductCard({ productName, price, description, picture, stock }) {
  return (
    <div className="card">
      <div className="singleCard">
        <h5>{productName}</h5>
        <div className="container">
          <img src={picture} alt="picture" style={{ width: "100%" }} />
          <p>{description}</p>
          <p>{price}</p>
          <p>{stock}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
