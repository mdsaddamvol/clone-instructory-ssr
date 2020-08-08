import { Container, Col, Row } from "react-bootstrap";

const Hero = (props) => {
	return (
		<section>
			<div className=' hero'>
				<Container>
					<Row>
						<Col>
							<div className='caption'>
								<p>
									Teach what you know, or lecture what you love. Teach as you
									want in the way that best suits your style and personality. We
									are serving you the platform that assists you to create and
									sell your own online courses.
								</p>
								<a href='#' className='width-btn-primary-lg slider-btn bg-red'>
									Upload Your Knowledge
								</a>
							</div>
						</Col>
						<Col>
							<img
								src='https://instructory.net//assets/images/slider-new.png'
								alt='slider'
							/>
						</Col>
					</Row>
				</Container>
			</div>

			<style jsx>{`
				.hero {
					background-color: #222222;
					padding: 60px 0;
				}
				.caption {
					font-family: Poppins-Light;
					margin: 0;
					padding: 0;
					display: flex;
					flex-direction: column;
					box-sizing: inherit;
					width: 100%;
					height: 100%;
					position: relative;
					justify-content: center;
					align-items: center;
				}
				.slider-img {
					padding: 20 px;
				}
				p {
					font-family: Poppins-Light;
					text-align: center;
					margin: 0;
					padding: 0;
					box-sizing: inherit;
					color: #ffffff;
					font-size: 16px;
					margin-bottom: 30px;
				}
				a {
					margin: 0;
					box-sizing: inherit;
					text-decoration: none;
					font-family: Poppins-Light;
					border-radius: 0px;
					padding: 15px 30px;
					color: #ffffff;
					text-align: center;
					justify-self: center;
					border: none;
					cursor: pointer;
					transition: all ease 0.3s;
					font-size: 16px;
					background-color: #ff5d5d !important;
				}

				img {
				}
			`}</style>
		</section>
	);
};

export default Hero;
