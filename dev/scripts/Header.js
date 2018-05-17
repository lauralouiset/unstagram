import React from 'react';


const Header = () => {
	return(
		<header>
				<h1 className="main_header">Ugly<span className="cursive">gram</span></h1>
				<nav className="main__nav">
					<ul>
						<li>About</li>
						<li>Gallery</li>
					</ul>
				</nav>
		</header>
	)
}; 

export default Header;