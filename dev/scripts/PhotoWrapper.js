import React from 'react';
import Filters from './Filters';

class PhotoWrapper extends React.Component {
	constructor(){
		super();
		this.state = {
		}
		


	}
	componentDidMount(){
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext("2d");
		const img = this.refs.image;
		console.log('initialize');
	}
	componentDidUpdate(){
		console.log(img);

	}
	render(){
		return(
		<div className="PhotoWrapper">
			<div className="photoContainer">
				<div id="canvasContainer">
					<canvas ref="canvas"></canvas>
					<img ref="image" src={this.props.currentPhoto} alt="Your uploaded image" className="hidden"/>
			</div>

				<div className="photoButtons">
						<form onSubmit={this.props.submitPhoto}>
							<input type="file" onChange={this.props.updatePhotoFile} />
							<input className="btn--submit" type="submit" value="upload" />
						</form>

					{/* <button type="button"className="btn--submit">Save Photo</button> */}

				</div>
			</div>

			<Filters />
		</div>
		)
	}
};

export default PhotoWrapper;