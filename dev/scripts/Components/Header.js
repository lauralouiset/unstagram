import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';



const Header = () => {
	return(
		<header>
			<div className="header__content wrapper">
			<div className="header__logo">
				<h1 className="header__bold">UN</h1>
				<h1 className="header__cursive cursive">stagram</h1>
			</div>
				<nav className="main__nav">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}; 

export default Header;