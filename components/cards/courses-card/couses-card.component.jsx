import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CoursesCard = ({
	courseId,
	title,
	catagory,
	price,
	enroled,
	likes,
	overview,
}) => {
	return (
		<div className='card'>
			<div className='card-img'>
				<img src='/static/card.jpg' alt='person gig ' />
			</div>
			<div className='tutor-name'>
				<span>Kshim Uddin Masud</span>
				<span>{enroled}+ enroled</span>
			</div>
			<div className='card-title'>
				<span>{title}</span>
			</div>
			<div className='card-discription'>
				<span>{overview}</span>
			</div>
			<div className='price-tag'>
				<div className='price'>
					<span>TK {price}</span>
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
