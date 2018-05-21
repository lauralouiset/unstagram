import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';


const Footer = () => {
	return(
		<footer>

		<div className="wrapper credits">
			<p>Built by <a href="http://laura.loui.se"><span className="cursive">Laura-Louise</span></a></p>
			<ul className="footer__socialmedia">
				<li><a href="http://www.twitter.com/fakelauralouise">Twitter</a></li>
				<li><a href="http://www.linkedin.com">LinkedIn</a></li>
				<li><a href="mailto: lauralouise@lauraloui.se">Email</a></li>
			</ul>
		</div>

		</footer>
	)
} 



export default Footer