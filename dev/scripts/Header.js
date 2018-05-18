import React from 'react';


const Header = () => {
	return(
		<header>
				<h1 className="main_header">UN<span className="cursive">stagram</span></h1>
				<nav className="main__nav">
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Gallery</li>
					</ul>
				</nav>
		</header>
	)
}; 

export default Header;