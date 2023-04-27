import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getProductsList } from '../../services/auth'

function CategoryList() {
    const [ productsList, setProductsList ] = useState([])

    useEffect(() => {
        async function productCategoriesList() {
            const list = await getProductsList()
            console.log(list)
            const categoryNames = list.map((category) => category.category)
            setProductsList(categoryNames)
            console.log(setProductsList)
        }
        productCategoriesList()
    }, [])
  return (
    <div>
        <ul>
        {productsList.map((category, i) => (
           <li key={i}><Link
           to={category}
           state={{ category: category }}
         >
           {category}
         </Link></li>
        ))}
    </ul>
    </div>
  )
}

export default CategoryList
{/* <Link to={category}>{category}</Link> */}