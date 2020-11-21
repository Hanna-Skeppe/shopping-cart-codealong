import React from 'react'
import { useSelector } from 'react-redux'

import { CartItem } from './CartItem'

export const Cart = () => {

  // Here we fetch products from the cart store:
  // Because we have pushed a new item in to the items-array (in cart.js),
  // we have the possibility to get them out with useSelector.
  // With useSelector we ask for store.cart.items from the store
  // (we select data from the store to be able to render it to the component)
  const products = useSelector((store) => store.cart.items)

  // calculate total from the sum of all products in the cart.
  const totalPrice = useSelector((store) => (
    // return the items and use reduce functon to sum up the total price of the items
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">🛒</span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
