import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.hnpwa.com/v0',
});

const fetchListItem = (pageName: string) => {
	return instance.get(`${pageName}/1.json`);
};

const fetchUserItem = (userId: string) => {
	return instance.get(`user/${userId}.json`);
};

const fetchPostItem = (itemId: string) => {
	return instance.get(`item/${itemId}.json`);
};

export { fetchListItem, fetchUserItem, fetchPostItem };
