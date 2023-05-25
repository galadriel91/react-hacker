import { useEffect } from 'react';
import { PostsItem } from 'store/features/types';
import { FETCH_POST } from 'store/features/sync';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import PostContents from 'components/post/PostContents';
import PostComments from 'components/post/PostComments';
import UserItem from 'components/user/UserItem';
import Style from 'assets/scss/pages/PostPage.module.scss';

const PostPage = () => {
	const navigate = useNavigate();
	const post = useAppSelector(state => state.items.posts);
	const dispatch = useAppDispatch();
	const params = useParams();

	const handldeFetch = async () => {
		try {
			const response = await dispatch(FETCH_POST(params.id as string));
			const payload = response.payload as PostsItem;
			if (payload === null) {
				navigate('/404', { replace: true });
			} else {
				return true;
			}
		} catch (err) {
			navigate('/404', { replace: true });
		}
	};

	useEffect(() => {
		handldeFetch();
		document.title = `Post | Hacker News`;
	}, [params.id]);

	return (
		<div className={Style.itemContainer}>
			{post === null ? '' : <UserItem item={post} />}
			{post === null ? '' : <PostContents item={post} />}
			{post !== null && post.comments_count ? <PostComments item={post} /> : ''}
		</div>
	);
};

export default PostPage;
