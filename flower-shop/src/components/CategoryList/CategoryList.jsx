import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductsList } from "../../services/apiFlower";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import './CategoryList.css'

function CategoryList() {
  const [productsList, setProductsList] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    async function productCategoriesList() {
      const list = await getProductsList();
     
      const categoryNames = list.map((category) => category.category);
      setProductsList(categoryNames);
    
    }
    productCategoriesList();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-evenlty",
      padding: "50px",
    }}>
        {productsList.map((category, i) => (
          
            <Link key={i} to={category} state={{ category: category }} style={{textDecoration: 'none'}}>
              
              <Box sx={{
                display: "flex",
                justifyContent: "space-evenlty",
                padding: "50px",
              }}>
                <Card className="card"
                variant="outlined"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                
              >{category.toUpperCase()}</Card>

              </Box>
            </Link>
          
        ))}
      </Box>
  );
}

export default CategoryList;
{
  /* <Link to={category}>{category}</Link> */
}
