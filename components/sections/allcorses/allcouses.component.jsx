import React from "react";
import Courses from "../best-courses-section/courses-section.component";
const AllCourses = (props) => {
	const catagory = [
		{
			id: 1,
			catagory: "latest",
		},
		{ id: 2, catagory: "best selling" },
		{ id: 3, catagory: "web-development" },
		{ id: 4, catagory: "graphics" },
		{ id: 5, catagory: "academic" },
	];
	return (
		<div>
			{catagory.map((data) => (
				<Courses key={data.id} {...data} />
			))}
		</div>
	);
};

export default AllCourses;
