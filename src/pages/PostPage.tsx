import React, { useEffect } from 'react';
import { FETCH_POST } from '../store/features/sync';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import UserItem from '../components/user/UserItem';
import PostContents from '../components/post/PostContents';
import Style from '../assets/scss/pages/PostPage.module.scss';

const PostPage = () => {
	const post = useAppSelector(state => state.items.posts);
	const dispatch = useAppDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(FETCH_POST(params.id as string));
		document.title = `Post | Hacker News`;
	}, [params.id]);

	return (
		<div className={Style.itemContainer}>
			<UserItem item={post} />
			<PostContents item={post} />
		</div>
	);
};

export default PostPage;
