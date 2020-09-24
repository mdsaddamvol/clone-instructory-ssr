import React, { useEffect, useState } from "react";
import CoursesCard from "../../cards/courses-card/couses-card.component";
import OwlCarousel from "react-owl-carousel2";
import { Container } from "react-bootstrap";
const { createApolloFetch } = require("apollo-fetch");

const feetch = createApolloFetch({
	uri: "http://localhost:3000/api/graphql",
});

const query = `
{ allCatagory{
	bestSelling{
		courseId,
		title,
		catagory,
		price,
		enroled,
		likes,
		tutorId,
		overview,
		level,
		language,
		created_at},
		webDevelopment{
			courseId,
			title,
			catagory,
			price,
			enroled,
			likes,
			tutorId,
			overview,
			level,
			language,
			created_at},
		graphics{
		courseId,
		title,
		catagory,
		price,
		enroled,
		likes,
		tutorId,
		overview,
		level,
		language,
		created_at,
		}
		academic{
			courseId,
			title,
			catagory,
			price,
			enroled,
			likes,
			tutorId,
			overview,
			level,
			language,
			created_at},
	}}`;

const Courses = () => {
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

	const [stat, setStat] = useState({
		bestSelling: [],
		webDevelopment: [],
		graphics: [],
		academic: [],
	});
	useEffect(() => {
		feetch({
			query,
		}).then((data) => setStat(data.data.allCatagory));
	}, []);

	return (
		<Container className=' pl-5 pr-5' fluid>
			<div className='border-bottom '>
				<h1 className=''>Best Selling courses</h1>
			</div>
			<div className='cards-container'>
				<OwlCarousel usref='car' options={options}>
					{stat.bestSelling.map((catagory) => {
						return <CoursesCard key={catagory.courseId} {...catagory} />;
					})}
				</OwlCarousel>
			</div>

			<div className='border-bottom '>
				<h1 className=''>web-development courses</h1>
			</div>
			<div className='cards-container'>
				<OwlCarousel usref='car' options={options}>
					{stat.webDevelopment.map((catagory) => (
						<CoursesCard key={catagory.courseId} {...catagory} />
					))}
				</OwlCarousel>
			</div>

			<div className='border-bottom '>
				<h1 className=''>graphics courses</h1>
			</div>
			<div className='cards-container'>
				<OwlCarousel usref='car' options={options}>
					{stat.graphics.map((catagory) => (
						<CoursesCard key={catagory.courseId} {...catagory} />
					))}
				</OwlCarousel>
			</div>

			<div className='border-bottom '>
				<h1 className=''>Academic courses</h1>
			</div>
			<div className='cards-container'>
				<OwlCarousel usref='car' options={options}>
					{stat.academic.map((catagory) => (
						<CoursesCard key={catagory.courseId} {...catagory} />
					))}
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
