import React, { useState } from 'react';
import { PostsItem } from 'store/features/types';
import CommentsItem from './CommentsItem';
import Style from 'assets/scss/components/post/PostComments.module.scss';

type ItemProps = {
	item: PostsItem;
};

const PostComments = ({ item }: ItemProps) => {
	const [first, setFirst] = useState(true);
	return (
		<div className={Style.commentWrap}>
			<div className={Style.mainComments}>
				<h2>Comments</h2>
				<span>({item.comments_count})</span>
			</div>
			<ul>
				<CommentsItem isFirst={first} items={item} />
			</ul>
		</div>
	);
};

export default PostComments;
