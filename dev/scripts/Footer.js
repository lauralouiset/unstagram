import React from 'react';


const Footer = () => {
	return(
		<footer>

		<div className="photoButtons">
		<button className="btn--submit">Upload Photo</button>
		<button className="btn--submit">Save Photo</button>
		</div>

		<div className="credits">
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