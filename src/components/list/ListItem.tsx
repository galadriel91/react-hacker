import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../../assets/scss/components/list/ListItem.module.scss';
import { ListItems } from '../../store/features/types';

type ItemProps = {
	items: ListItems[];
};

const ListItem = ({ items }: ItemProps) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index} className={Style.itemContainer}>
					<div className={Style.itemWrap}>
						<span className={Style.indexNumber}>{index + 1}</span>
						<div className={Style.itemInfo}>
							{item.domain ? (
								<p>
									<a href={item.url} target="_blank" rel="noreferrer">
										{item.title}
									</a>
								</p>
							) : (
								<p>
									<Link to={`/item/${item.id}`}>{item.title}</Link>
								</p>
							)}
							<div>
								{item.type === 'job' ? <span>by</span> : <span>{item.points} points by</span>}
								{item.user ? (
									<Link to={`/user/${item.user}`}>{item.user}</Link>
								) : (
									<a href={item.url} target="_blank" rel="noreferrer">
										{item.domain ? item.domain : 'Unknown'}
									</a>
								)}
								<span>{item.time_ago}</span>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default React.memo(ListItem);
