import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(
			<div>
				//Top Footer
				<div className="top-footer">
					<div className="top-footer--linkbox">
						<a href="#">Udemy for Business</a>
						<a href="#">About Us</a>
						<a href="#">Topics</a>
						<a href="#">Become an Instructor</a>
						<a href="#">Careers</a>
						<a href="#">Support</a>
						<a href="#">Mobile Apps</a>
						<a href="#">Blog</a>
						<a href="#">Affiliate</a>
					</div>
					<div className="top-footer--local-home">
						<p>Local Home Page: </p>
						<a href="#">English</a>
						<a href="#">Deutch</a>
						<a href="#">Espanol</a>
						<a href="#">Francais</a>
						<a href="#">Portugules</a>
						<a href="#">#*^</a>
					</div>
					<button className="top-footer--button">English</button>
				</div>
				//Bottom footer
				<div className="bottom-footer">
					<div className="bottom-footer--logo"></div>
					<div className="bottom-footer--cp"></div>
					<div className="bottom-footer--right">
						<a href="#">Terms</a>
						<a href="#">Privacy Policy and Cookie Policy</a>
						<a href="#">Intellectual Property</a>
					</div>
				</div>
			</div>

		)
	}
}

export default Footer;