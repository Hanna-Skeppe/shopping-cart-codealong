import React from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

// We need to combine our two reducers in to one single reducer:
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

// We create a store, and we pass in an object with the key reducer.
// We can then use our store in the provider.
const store = configureStore({ reducer })

// We make our store available to our App by using provider.
// Make all redux stores available in all of the app, and therefore put in in the highest level,
// which is App.
// The Provider component takes a store prop which is the redux store that we pass in to it.
// This makes it possible to use the hooks to interact with our store.
export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
