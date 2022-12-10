import React from 'react';
import { Link } from 'react-router-dom';
import { UserItems } from '../../store/features/types';
import Style from '../../assets/scss/components/user/UserItem.module.scss';

type ItemProps = {
	item: UserItems;
};
const UserItem = ({ item }: ItemProps) => {
	return (
		<div>
			<div className={Style.userWrap}>
				<p className="xi-user-address" />
				{item.karma ? (
					<div className={Style.userInfo}>
						<h4>User : {item.id}</h4>
						<span>Created : {item.created}</span>
						<p>Karma : {item.karma}</p>
					</div>
				) : (
					''
					// <div className={Style.userInfo}>
					// 	<h4>
					// 		<Link to={`/user/${item.user}`}>User : {item.user}</Link>
					// 	</h4>
					// 	<p>Posted : {item.time_ago}</p>
					// 	<span>Points : {item.points}</span>
					// </div>
				)}
			</div>
			{item.about ? (
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
