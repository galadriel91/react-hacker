import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './features/items'

export const store =  configureStore({
    reducer: {
        items: itemReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch