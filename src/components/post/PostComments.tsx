import React from 'react';
import Style from '../../assets/scss/components/post/PostComments.module.scss';
import { PostsItem } from '../../store/features/types';

type ItemProps = {
	item: PostsItem;
};

const PostComments = ({ item }: ItemProps) => {
	return (
		<div className={Style.commentWrap}>
			<div>
				<h2>Comments</h2>
				<span>({item.comments_count})</span>
			</div>
		</div>
	);
};

export default PostComments;
