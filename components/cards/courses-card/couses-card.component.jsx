import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CoursesCard = ({ albumId, id, title, url, thumbnailUrl }) => {
	return (
		<div className='card'>
			<div className='card-img'>
				<img src='/static/card.jpg' alt='person gig ' />
			</div>
			<div className='tutor-name'>
				<span>Kshim Uddin Masud</span>
				<span>{id}+ enroled</span>
			</div>
			<div className='card-title'>
				<span>{title.slice(0, 20)}</span>
			</div>
			<div className='card-discription'>
				<span>
					Note that the development build is not optimized. To create a
					production build, use yarn build.ote that the development build is not
					optimized.
				</span>
			</div>
			<div className='price-tag'>
				<div className='price'>
					<span>TK 700</span>
				</div>
				<div className='icons'>
					<FontAwesomeIcon
						icon={["fas", "cart-plus"]}
						style={{ color: "red" }}
					/>
					<FontAwesomeIcon
						icon={["fas", "heart"]}
						style={{ color: "yellow" }}
					/>
					<FontAwesomeIcon icon={["fas", "share"]} style={{ color: "red" }} />
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
