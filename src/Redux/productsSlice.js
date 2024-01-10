import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'items',
    initialState: {
        selectedCategory: "View all"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const {filterCategory } = productSlice.actions;
export const getSelectedCategory = state => state.items.selectedCategory;
export default productSlice.reducer