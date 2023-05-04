import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../services/apiFlower";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/system";

function CategoryProduct() {
  const [productShowList, setProductShowList] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    async function getAndSetProduct() {
      const productListByCategory = await getProductByCategory(categoryName);
      console.log(productListByCategory);
      setProductShowList(productListByCategory);
    }
    getAndSetProduct();
  }, [categoryName]);

  const showProductsByCategory = () => {
    return productShowList.map((product) => (
      <ProductCard
        key={product.productId}
        picture={product.picture}
        productName={product.productName}
        price={product.price}
      />
    ));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {showProductsByCategory()}
    </Box>
  );
}

export default CategoryProduct;
