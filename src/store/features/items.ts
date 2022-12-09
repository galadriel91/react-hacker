import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        title: 'React Todo'
    },
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
// export const { ADD_TODO, CHECK_TODO , DELETE_TODO , UPDATE_TODO} = itemSlice.actions

export default itemSlice.reducer