import React, { useState, useEffect } from "react";
import CoursesCard from "../../cards/courses-card/couses-card.component";
import OwlCarousel from "react-owl-carousel2";
import { Container } from "react-bootstrap";

const Courses = ({ id, catagory }) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		if (photos.length === 0) {
			const fetchdta = () => {
				fetch("https://jsonplaceholder.typicode.com/photos")
					.then((respons) => respons.json())
					.then((jso) => setPhotos(jso.slice(0, 9)));
			};
			fetchdta();
		}
	}, [photos, setPhotos]);
	const options = {
		autoplayHoverPause: true,
		rewind: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				center: true,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
			},
			1100: {
				items: 4,
			},
		},
	};

	return (
		<Container className=' pl-5 pr-5' fluid>
			<div className='border-bottom '>
				<h1 className=''>{catagory} corses</h1>
			</div>
			<div className='cards-container'>
				<OwlCarousel usref='car' options={options}>
					{photos.map((photo) => {
						return <CoursesCard {...photo} key={photo.id} />;
					})}
				</OwlCarousel>
			</div>

			<style jsx>
				{`
					.border-bottom {
						margin-top: 50px;
						margin-bottom: 5px;
						color: #222;
						border-bottom: 1px solid #cccccc;
						position: relative;
						font-size: 18px;
						padding-bottom: 14px;
						text-transform: capitalize;
						font-weight: 100;
					}
					h1 {
						font-family: Poppins-SemiBold !important;
					}

					.border-bottom::before {
						content: "";
						position: absolute;
						background-color: #ff5d5d;
						width: 77px;
						height: 6px;
						bottom: -3px;
						left: 0;
					}
					.cards-container {
						display: flex;

						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</Container>
	);
};

export default Courses;
