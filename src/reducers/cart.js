import { createSlice } from '@reduxjs/toolkit'
// This is where one of our redux stores is defined
// This is were we create the actions.
// We create an object with a name and an initial state and an items key.
// Here we have our add and remove item reducers.
// Reducers: where you list your actions in a function. The reducers listens to dispatched actions
// and sends the payload of that action to update the store - state.
export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // addItem is the key. The value is the function of that key.
    // We pass the current state and the action.
    // The action has a name and a payload.
    // The payload is what we pass in to the action when we invoke it.
    addItem: (state, action) => {
      // In this function, we take the payload and add it to items

      // We use find to figure out if the item is in the items array or not
      // We want to find the item with the id that is the same as the id that is in our action.payload
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        // If the product is already in the items array, we just want to increment the quantity by one,
        // rather than adding a whole new item
        existingProduct.quantity += 1
      } else {
        // First added item: We use spread to add a new item and add quantity as a new key.
        // We have added a property (quantity) to our item when it is added to the cart state.
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    // In our remove-action we want to do the opposite from addItem.
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      // If the existing product is in the state and has one quantity,
      // we want to remove it
      if (existingProduct && existingProduct.quantity === 1) {
        // we can filter out the item we want to remove
        // this will return a new array of items except the item that was in the payload
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      // If we have multiple quantity, we want to remove it by one
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})