import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Filters from './Filters';



class PhotoWrapper extends React.Component {

	constructor(props){
		super();
		this.state = {
			photoFile: '',
			canvasWidth: 50,
			canvasHeight: 50,
				effect: function(){},
			data : '',
		}
		// this.overlay = this.overlay.bind(this);
		this.updatePhotoFile = this.updatePhotoFile.bind(this);
	}

	updatePhotoFile(e) {
		// get file from input
		const newFile = e.target.files[0];
		let fileName = "";
		console.log(fileName);
		// init FileReader API
		const reader = new FileReader();
		// if a file is entered, set fileName and
		// get data.
		if (newFile) {
			fileName = newFile.name;
			reader.readAsDataURL(newFile);
			let imageData = reader.result;
			console.log(imageData);
		}
		let img = new Image();
		img.src = this.state.imageData;

		this.setState({
			photoFile : fileName,
			value: e.target.value,
			canvasWidth : img.width,
			canvasHeight : img.height
		})

		// display image on canvas
		const canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
		const ctx = canvas.getContext('2d');

		img.onload = insertPhoto;
		function insertPhoto() {
			let image = new Image();
			// Set image src
			image.src = this.state.imageData;
			console.log(this.state.imageData);
			// On image load add to canvas
			// img.onload = function () {
			// 	canvas.width = this.state.canvasWidth;
			// 	canvas.height = this.state.canvasHeight;
			// 	ctx.drawImage(img, 0, 0, this.state.canvasWidth, this.state.canvasHeight);
			// }
		}
	}

	componentDidMount(){
	}

	render(){
		return(
		<div className="PhotoWrapper">
			<div className="photoContainer">
				<div id="canvasContainer">
					<canvas ref="myCanvas"></canvas>
			</div>

				<div className="photoButtons">
						<form onSubmit={this.submitPhoto}>
							<label htmlFor="fileInput">Upload Photo</label>
							<input type="file" name="fileInput" onChange={this.props.updatePhotoFile} />
						</form>

					<button type="button"className="btn--submit">Save Photo</button>

				</div>
			</div>

			<Filters />

		</div>
		)
	}
};

export default PhotoWrapper;