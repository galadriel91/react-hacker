import { createSlice } from '@reduxjs/toolkit';
// import { ListItems, PostsItem, UserItems } from './types';
// import { FETCH_LIST, FETCH_USER, FETCH_POST } from './sync';

export const commonSlice = createSlice({
	name: 'common',
	initialState: {
		currentPage: 1,
		// isLoading: true,
		// lists: [] as ListItems[],
		// user: {} as UserItems,
		// posts: {} as PostsItem,
	},
	reducers: {},
	// extraReducers: builder => {
	// 	builder.addCase(FETCH_LIST.pending, (state, action) => {
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(FETCH_LIST.fulfilled, (state, action) => {
	// 		state.isLoading = false;
	// 		state.lists = action.payload;
	// 	});
	// 	builder.addCase(FETCH_USER.pending, (state, action) => {
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(FETCH_USER.fulfilled, (state, action) => {
	// 		state.isLoading = false;
	// 		state.user = action.payload;
	// 	});
	// 	builder.addCase(FETCH_POST.pending, (state, action) => {
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(FETCH_POST.fulfilled, (state, action) => {
	// 		state.isLoading = false;
	// 		state.posts = action.payload;
	// 	});
	// },
});

export default commonSlice.reducer;