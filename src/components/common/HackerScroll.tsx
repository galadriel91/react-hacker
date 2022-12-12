import { useEffect } from 'react';
import { useLocation } from 'react-router';

const HackerScroll = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, [location]);

	return null;
};

export default HackerScroll;
