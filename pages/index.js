import Head from "next/head";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faCartPlus,
	faHeart,
	faShare,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../components/header.jsx";

import Hero from "../components/hero/hero.jsx";

import AllCourses from "../components/sections/allcorses/allcouses.component.jsx";

library.add(fab, faCartPlus, faHeart, faShare);

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<link
					rel='stylesheet'
					href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
					integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
					crossorigin='anonymous'
				/>
				<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js'></script>
			</Head>
			<Header />
			<Hero />
			<AllCourses />
		</React.Fragment>
	);
}
