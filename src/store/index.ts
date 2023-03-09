import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './features/items';
import commonReducer from './features/common';

export const store = configureStore({
	reducer: {
		items: itemReducer,
		common: commonReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
