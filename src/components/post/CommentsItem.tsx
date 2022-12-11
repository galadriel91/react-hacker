import React from 'react';
import Style from '../../assets/scss/components/post/CommentsItem.module.scss';
import { PostsItem } from '../../store/features/types';
import { Link } from 'react-router-dom';

type ItemProps = {
	isFirst: boolean;
	items: PostsItem;
};

const CommentsItem = ({ isFirst, items }: ItemProps) => {
	return (
		<li className={Style.innerContainer}>
			<div className={Style.innerInfo}>
				<div className={Style.userInfo}>
					{!isFirst ? <span className={`xi-subdirectory-arrow ${Style.arrow}`} /> : ''}
					<p className="xi-profile" />
					<div>
						<Link to={`/user/${items.user}`}>{items.user}</Link>
						<span>Posted by {items.time_ago}</span>
					</div>
				</div>
				<p className={Style.content} dangerouslySetInnerHTML={{ __html: items.content }} />
			</div>
			<div>
				<ul className={Style.innerComment}>
					{items.comments.map(v => (
						<CommentsItem key={v.id} isFirst={false} items={v} />
					))}
				</ul>
			</div>
		</li>
	);
};

export default CommentsItem;
