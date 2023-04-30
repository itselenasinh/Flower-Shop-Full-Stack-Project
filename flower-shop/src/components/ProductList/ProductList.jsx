import React from 'react'
import { searchByApi } from '../../services/apiFlower'
import ProductCard from '../ProductCard/ProductCard'

function ProductList() {
  return (
    <div className='products-list'>
        {
            searchByApi.map((product, i) => {
                return <ProductCard key={product.productName}{...product}/>
            })
        }
        </div>
  )
}

export default ProductList
