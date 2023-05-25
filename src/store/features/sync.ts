import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchListItem, fetchUserItem, fetchPostItem } from '../../api';

const FETCH_LIST = createAsyncThunk('item/fetchListByPath', async (path: string, thunkAPI) => {
	const response = await fetchListItem(path);
	if (typeof response.data == 'string') {
		// 리스트의 데이터가 없을경우
		window.location.replace('https://react-hacker.netlify.app/404');
	}
	return response.data;
});

const FETCH_USER = createAsyncThunk('item/fetchUserByid', async (path: string, thunkAPI) => {
	const response = await fetchUserItem(path);
	if (!response.data.id) {
		// User id정보가 없을 경우 에러 페이지로 리플레이스
		window.location.replace('https://react-hacker.netlify.app/404');
	}
	return response.data;
});

const FETCH_POST = createAsyncThunk('item/fetchPostByid', async (path: string, thunkAPI) => {
	const response = await fetchPostItem(path);
	return response.data;
});

export { FETCH_LIST, FETCH_USER, FETCH_POST };
