interface ListItems {
	comments_count: number;
	domain: string;
	id: number;
	points: number;
	time: number;
	time_ago: string;
	title: string;
	type: string;
	url: string;
	user: string;
}

interface GetListItemParams {
	pageName: string;
	pageNum: number;
}

interface UserItems {
	about?: string;
	created_time: number;
	created: string;
	id: string;
	karma: number;
}

interface PostsItem {
	id: number;
	title: string;
	points: number | null;
	user: string | null;
	time: number;
	time_ago: string;
	content: string;
	deleted?: boolean;
	dead?: boolean;
	type: string;
	url?: string;
	domain?: string;
	comments: PostsItem[];
	level: number;
	comments_count: number;
}

export { type ListItems, type GetListItemParams, type UserItems, type PostsItem };
