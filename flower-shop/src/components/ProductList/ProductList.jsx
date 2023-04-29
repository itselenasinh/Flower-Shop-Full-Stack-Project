import React from 'react'
import { getProducts } from '../../services/apiFlower'
import ProductCard from '../ProductCard/ProductCard'

function ProductList() {
  return (
    <div className='products-list'>
        {
            getProducts.map((product, i) => {
                return <ProductCard key={product.id}{...product}/>
            })
        }
        </div>
  )
}

export default ProductList
