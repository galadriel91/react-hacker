import axios, { type AxiosResponse } from 'axios';

import { UserItems, PostsItem, ListItems } from 'store/features/types';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API,
});

const fetchListItem = (pageInfo: string): Promise<AxiosResponse<ListItems[]>> => {
	return instance.get(`${pageInfo}.json`);
};

const fetchUserItem = (userId: string): Promise<AxiosResponse<UserItems>> => {
	return instance.get(`user/${userId}.json`);
};

const fetchPostItem = (itemId: string): Promise<AxiosResponse<PostsItem>> => {
	return instance.get(`item/${itemId}.json`);
};

export { fetchListItem, fetchUserItem, fetchPostItem };
