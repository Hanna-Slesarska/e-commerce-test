import { configureStore } from '@reduxjs/toolkit'
import items from './productsSlice'
import cart from './CartSlice'

export const store = configureStore({
    reducer: {
      items,
      cart 
    },
  })