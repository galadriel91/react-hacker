import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchListItem, fetchUserItem, fetchPostItem } from '../../api';

const FETCH_LIST = createAsyncThunk('item/fetchListByPath', async (path: string, thunkAPI) => {
	const response = await fetchListItem(path);
	return response.data;
});

const FETCH_USER = createAsyncThunk('item/fetchUserByid', async (path: string, thunkAPI) => {
	const response = await fetchUserItem(path);
	return response.data;
});

const FETCH_POST = createAsyncThunk('item/fetchPostByid', async (path: string, thunkAPI) => {
	const response = await fetchPostItem(path);
	return response.data;
});

export { FETCH_LIST, FETCH_USER, FETCH_POST };
