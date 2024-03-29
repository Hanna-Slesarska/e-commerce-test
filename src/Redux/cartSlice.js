import { createSlice } from '@reduxjs/toolkit';



export const CartSlice  = createSlice({
    name:'cart',
    initialState: {
        cartItems: [],
    },

    reducers: {
        addToCart: (state, action) => {
           const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                productId: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price
            })

        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
              (cartItem) => cartItem.id !== action.payload.cartItemId
            );
          },
    }
})


export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
  };
export  const { addToCart, removeFromCart } = CartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export default CartSlice.reducer