import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';


const Header = () => {
	return(
		<header>
			<div className="header__content wrapper">
				<h1 className="header__text">UN<span className="cursive">stagram</span></h1>
				<nav className="main__nav">
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Gallery</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}; 

export default Header;