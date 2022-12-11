import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.hnpwa.com/v0',
});

const fetchListItem = (pageInfo: string) => {
	return instance.get(`${pageInfo}.json`);
};

const fetchUserItem = (userId: string) => {
	return instance.get(`user/${userId}.json`);
};

const fetchPostItem = (itemId: string) => {
	return instance.get(`item/${itemId}.json`);
};

export { fetchListItem, fetchUserItem, fetchPostItem };
