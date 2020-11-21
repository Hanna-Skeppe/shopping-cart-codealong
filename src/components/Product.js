import React from 'react'
import { useDispatch } from 'react-redux'

// We import the reducer that we are going to dispatch an action to.
import { cart } from 'reducers/cart'

// The action is to add an item to the cart when we click button on  a product.
export const Product = ({ product }) => {
  // We initialize our dispatch:
  const dispatch = useDispatch()

  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        // In our onClick we can dispatch the action.
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
      </button>
    </article>
  )
}
