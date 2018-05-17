import React from 'react';
import Filter from './Filter';


const PhotoWrapper = () => {
	return(
		<div className="PhotoWrapper">
		<div className="canvasContainer">
			<canvas></canvas>
		</div>
			<Filter />
		</div>
	)
};







export default PhotoWrapper;