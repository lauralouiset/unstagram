import React from 'react';
import firebase from 'firebase';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';


const About = () => {
	return (
		<div className="about">
			<h2 className="about__header">About UN<span className="cursive">stagram</span></h2>
				<p>Are you sick of comparing the beautifully shot, perfectly staged, photos on social media? Is your own life starting to pale in comparison to pictures taken with vibrant filters and in exotic locations? You're not alone. <a href="http://time.com/4793331/instagram-social-media-mental-health/">Studies show</a> that too much time spent on social media ogling the (often artificial) lives of the rich, beautiful, and Instagram-famous can make us depressed, and lead us to underappreciate our own lives. </p>
			<p>UNstagram was conceived as an alternative and an antidote to the envy-inducing effects of other social media platforms.UNstagram celebrates shaky camera blur, over-exposure, bad flash, and terrible lighting! After all, why make your photos prettier when you can make them comically uglier? </p>
			<p>UNstagram was built by Laura-Louise Tobin  in React as a project in <a href="https://hackeryou.com">Hacker You</a>'s' Full-Time Web Development Bootcamp in 2018.</p>
		</div>
	)
} 

export default About;