import { createSlice } from '@reduxjs/toolkit'
// we use redux toolkit to create slice
// This is where one of our redux stores is defined
// We don't use reducers for the products store because 
// we don't make any changes to the data we use.
// This products data is available to any component that asks for it
const productData = [
  { id: 1, title: 'Socks', price: 100, emoji: '🧦 ' },
  { id: 2, title: 'T-shirt', price: 200, emoji: '👕 ' },
  { id: 3, title: 'Pants', price: 350, emoji: '👖 ' },
  { id: 4, title: 'Dress', price: 550, emoji: '👗 ' }
]

// we pass arguments to the create slice function
export const products = createSlice({
  name: 'products',
  initialState: productData
})