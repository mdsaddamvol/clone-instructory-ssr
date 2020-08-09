import Logo from "./logo/logo";
import FblikeButtons from "./fblikebuttons/fblikebutton";
import { Container, Col, Row } from "react-bootstrap";
const Header = (props) => (
	<div className='header'>
		<div className='logo'>
			<Logo />
		</div>
		<div className='fblikebutton pl-5'>
			<FblikeButtons />
		</div>
		<div className='strtlrn'>
			<span>Start Learning</span>
			<span className='span2'>Become an Online Teacher</span>
		</div>
		<div className='signinout'>
			<span className='signin'>Sign In</span>
			<span className='signout'>Sign Up</span>
		</div>
		<style jsx>
			{`
				.header {
					width: 100%;
					min-height: 100px;
					max-height: 300px;
					display: flex;
					justify-content: space-evenly;
					flex-wrap: wrap;
					align-items: center;
				}
				.logo {
					margin: 10px;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex: 0 0 300px;
				}
				.fblikebutton {
					margin: 10px;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex: 0 0 300px;
				}
				.strtlrn {
					margin: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					flex: 0 0 300px;
				}
				.signinout {
					margin: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					flex: 0 0 300px;
				}
				span {
					text-decoration: none;
					font-size: 12px;
					color: #949494;
					padding-right: 6px;
				}
				.span2 {
					font-family: Poppins-Light;
					border-radius: 0px;
					background-color: #1aa3d0;
					padding: 11px 15px;
					max-width: 234px;
					color: #ffffff;
					font-size: 12px;
					text-align: center;
					border: none;
					cursor: pointer;
				}

				.signout {
					font-family: Poppins-Light;
					border-radius: 0px;
					background-color: #1aa3d0;
					padding: 11px 15px;
					max-width: 99px;
					color: #ffffff;
					font-size: 12px;
					text-align: center;
					border: none;
				}

				.signin {
					font-family: Poppins-Light;
					border-radius: 0px;
					border: 1px solid #c3c3c3 !important;
					padding: 10px 15px !important;
					max-width: 99px !important;
					color: #949494 !important ;
					font-size: 12px !important;
					text-align: center !important;
					background-color: #ffffff !important;
					margin-right: 5px;
				}
			`}
		</style>
	</div>
);

export default Header;
