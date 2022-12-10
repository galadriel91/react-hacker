import React from 'react';
import Style from '../../assets/scss/components/post/PostContents.module.scss';
import { PostsItem } from '../../store/features/types';

type ItemProps = {
	item: PostsItem;
};

const PostContents = ({ item }: ItemProps) => {
	return (
		<div className={Style.itemWrap}>
			<h1>{item.title}</h1>
			<div>
				<p dangerouslySetInnerHTML={{ __html: item.content }} />
			</div>
		</div>
	);
};

export default PostContents;
