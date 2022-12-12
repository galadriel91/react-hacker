import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { FETCH_POST } from 'store/features/sync';
import { useParams } from 'react-router-dom';
import PostContents from 'components/post/PostContents';
import PostComments from 'components/post/PostComments';
import UserItem from 'components/user/UserItem';
import Style from 'assets/scss/pages/PostPage.module.scss';

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
			{post.comments_count ? <PostComments item={post} /> : ''}
		</div>
	);
};

export default PostPage;
