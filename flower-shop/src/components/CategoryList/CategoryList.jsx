import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductsList } from "../../services/apiFlower";

function CategoryList() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function productCategoriesList() {
      const list = await getProductsList();
     
      const categoryNames = list.map((category) => category.category);
      setProductsList(categoryNames);
    
    }
    productCategoriesList();
  }, []);
  return (
    <div>
      <ul>
        {productsList.map((category, i) => (
          <li key={i}>
            <Link to={category} state={{ category: category }}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
{
  /* <Link to={category}>{category}</Link> */
}
