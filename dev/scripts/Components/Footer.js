import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';


const Footer = () => {
	return(
		<footer>

		<div className="wrapper credits">
				<p> Built in 2018 by<span className="cursive">Laura-Louise</span></p>
			<ul className="footer__socialmedia">
					<li><a href="http://laura.loui.se"><i className="fas fa-desktop"></i></a></li>
					<li><a href="mailto: lauralouise@lauraloui.se"><i className="far fa-envelope"></i></a></li>
					<li><a href="https://www.twitter.com/fakelauralouise"><i className="fab fa-twitter"></i></a></li>
					<li><a href="https://www.linkedin.com/in/laura-louise-tobin/"><i className="fab fa-linkedin-in"></i></a></li>
				
			</ul>
		</div>

		</footer>
	)
} 



export default Footer