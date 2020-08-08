const Logo = (props) => {
	return (
		<div className='logo '>
			<div className='logo-primary '>
				<span className='icon '>
					<i className='fas fa-play-circle'></i>
				</span>
				<span className='icon'>
					<img
						src='https://instructory.net//assets/images/logo-blue_beta.png'
						alt='Instructory - Online teaching marketplace'
					/>
				</span>
			</div>
			<style jsx>
				{`
					.logo {
						align-self: center;
						width: 200px;
						height: 50px;
						align-self: center;
					}
					img {
						width: 100%;
						align-self: center;
					}
				`}
			</style>
		</div>
	);
};

export default Logo;
