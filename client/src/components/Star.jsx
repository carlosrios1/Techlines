import { HiStar } from "react-icons/hi";

const Star = ({ rating = 0, star = 0 }) => (
	<HiStar color={rating >= star || rating === 0 ? 'cyan.500' : 'gray.200'} />
);

export default Star;