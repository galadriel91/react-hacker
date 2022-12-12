import React from 'react';
import { Link } from 'react-router-dom';
import { UserItems, PostsItem } from 'store/features/types';
import Style from 'assets/scss/components/user/UserItem.module.scss';

type ItemProps = {
	item: UserItems | PostsItem;
};
const UserItem = ({ item }: ItemProps) => {
	const isUserItems = (typeOfProp: UserItems | PostsItem): typeOfProp is UserItems => {
		return 'karma' in typeOfProp;
	};

	return (
		<div>
			<div className={`${Style.userWrap}`}>
				<p className="xi-user-address" />
				{isUserItems(item) ? (
					<div className={Style.userInfo}>
						<h4>User : {item.id}</h4>
						<span>Created : {item.created}</span>
						<p>Karma : {item.karma}</p>
					</div>
				) : (
					<div className={Style.userInfo}>
						<h4>
							<Link to={`/user/${item.user}`}>User : {item.user}</Link>
						</h4>
						<span>Posted : {item.time_ago}</span>
						<p>Points : {item.points}</p>
					</div>
				)}
			</div>
			{isUserItems(item) && item.about ? (
				<div className={Style.userDesc}>
					<h3>About</h3>
					<div dangerouslySetInnerHTML={{ __html: item.about }} />
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default React.memo(UserItem);
