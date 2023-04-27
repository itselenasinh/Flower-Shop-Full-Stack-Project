import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getProductByCategory } from "../../services/auth";
import ProductCard from "../../components/ProductCard/ProductCard";

function Crowns() {
  const [crownsState, setcrownsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    async function getProductCategory() {
      const categoryList = await getProductByCategory(category);
      if (categoryList) {
        setcrownsState(categoryList);
      }
      setIsLoading(false);
    }
    getProductCategory();
  }, [category]);

  const showListByCategory = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!crownsState || crownsState.length === 0) {
      return <div>No products found.</div>;
    }
    return crownsState.map((product) => (
      <Link key={product.category} to={`/products-${category}/idProducts`}>
        <ProductCard
          productName={product.productName}
          picture={product.picture}
        />
      </Link>
    ));
  };
  return <div>{showListByCategory()}</div>;
}

export default Crowns;
