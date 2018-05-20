import React from 'react';


const Filters = (props) => {

	return(
		<div className="filter">
			<h2>Uglify Your Photo</h2>
			<div className="buttonContainer">
				<button onClick={ () => props.overlay } className="overlay btn__filter">Filter 1</button>
				<button className="btn__filter">Filter 2</button>
				<button className="btn__filter">Filter 3</button>
				<button className="btn__filter">Filter 4</button>
				<button className="btn__filter">Filter 5</button>
				<button className="btn__filter">Filter 6</button>
				<button className="btn__filter">Filter 7</button>
				<button className="btn__filter">Filter 8</button>
			<div>

				<div className="buttonContainer">
					<button className="btn__filter">Reset Photo</button>
					<button className="btn__filter">Save Photo</button>
				</div>
			</div>
		</div>
		</div>
	)
};



export default Filters;