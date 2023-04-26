import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductByCategory } from '../../services/auth'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'


function Bouquets() {
  const [ productShowList, setProductShowList ] = useState([])
  const {categoriesId} = useParams()

  useEffect(() => {
    async function getAndSetProduct() {
      const productListByCategory = await getProductByCategory
      (categoriesId)
      setProductShowList(productListByCategory)
    }
    getAndSetProduct()
  }, [categoriesId])

  const showProductsByCategory = () => {
    return productShowList.map((product) => (
      <Link key={product.category} to={`/categories/${categoriesId}/product/${product.idDrink}`}><ProductCard picture={product.picture}
            productName={product.proame}
          /></Link>
    ))
  }
  return (
    <div>
        {showProductsByCategory()}
    </div>
  )
}

export default Bouquets