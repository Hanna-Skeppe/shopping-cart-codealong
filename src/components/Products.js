import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // Here we fetch all products from the store with useSelector.
  // This function takes the store/state as an argument and we say what we want from the store.
  // It will return the stores products
  const allProducts = useSelector((store) => store.products)

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
