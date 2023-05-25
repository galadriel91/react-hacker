import { PostsItem } from 'store/features/types';
import Style from 'assets/scss/components/post/PostContents.module.scss';

type ItemProps = {
	item: PostsItem;
};

const PostContents = ({ item }: ItemProps) => {
	return (
		<div className={Style.itemWrap}>
			<span>&nbsp;</span>
			<h1>{item.title}</h1>
			<div>
				<p dangerouslySetInnerHTML={{ __html: item.content }} />
			</div>
		</div>
	);
};

export default PostContents;
