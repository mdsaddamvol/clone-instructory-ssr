import React from "react";

const FblikeButtons = (props) => {
	return (
		<div className=' fbLike field-addon header-margin fb-btns'>
			<div
				className='fb-like fb_iframe_widget'
				data-href='https://www.facebook.com/instructory/'
				data-width='150'
				data-layout='button_count'
				data-action='like'
				data-size='large'
				data-share={true}
				fb-xfbml-state='rendered'
				fb-iframe-plugin-query='action=like&amp;app_id=&amp;container_width=265&amp;href=https%3A%2F%2Fwww.facebook.com%2Finstructory%2F&amp;layout=button_count&amp;locale=en_GB&amp;sdk=joey&amp;share=true&amp;size=large&amp;width=150'
			>
				<span
					style={{ verticalAlign: "bottom", width: "157px", height: "28px" }}
				>
					<iframe
						name='f3e65587c7e8728'
						width='150px'
						height='1000px'
						dataTestid='fb:like Facebook Social Plugin'
						title='fb:like Facebook Social Plugin'
						frameBorder='0'
						allowtransparency={true}
						allowFullScreen={true}
						scrolling='no'
						allow='encrypted-media'
						src='https://www.facebook.com/v5.0/plugins/like.php?action=like&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df31edf1ccd189e4%26domain%3Dinstructory.net%26origin%3Dhttps%253A%252F%252Finstructory.net%252Ff344d74225d56e4%26relation%3Dparent.parent&amp;container_width=265&amp;href=https%3A%2F%2Fwww.facebook.com%2Finstructory%2F&amp;layout=button_count&amp;locale=en_GB&amp;sdk=joey&amp;share=true&amp;size=large&amp;width=150'
						style={{
							border: "none",
							visibility: "visible",
							width: "157px",
							height: "28px",
						}}
						className=''
					></iframe>
				</span>
			</div>
			<style jsx>
				{`
					.fbLike {
						min-width: 200px;
						max-width: 20vw;

						align-self: center;
					}
				`}
			</style>
		</div>
	);
};

export default FblikeButtons;
