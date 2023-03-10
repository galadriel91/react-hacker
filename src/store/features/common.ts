import { createSlice } from '@reduxjs/toolkit';
import { ListItems, PostsItem, UserItems } from './types';
import { FETCH_LIST, FETCH_USER, FETCH_POST } from './sync';

export const commonSlice = createSlice({
	name: 'common',
	initialState: {
		currentPage: 1,
		pageLength: 0,
		indexNum: 0,
	},
	reducers: {
		SET_INDEXNUM: (state, action) => {
			state.indexNum = state.indexNum + action.payload;
		},
		SET_CURRENT: state => {
			state.currentPage = state.indexNum + 1;
		},
		INIT_INDEX: state => {
			state.indexNum = 0;
		},
		INIT_CURRENT: state => {
			state.currentPage = 1;
		},
	},
});

export const { SET_INDEXNUM, SET_CURRENT, INIT_INDEX, INIT_CURRENT } = commonSlice.actions;
export default commonSlice.reducer;
