import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Filters from './Filters';



class PhotoWrapper extends React.Component {

	constructor(props){
		super();
		this.validTypes = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg'];
		this.state = {
			photoFile: '',
			canvasWidth: 50,
			canvasHeight: 50,
			effect: function(){},
			data : '',
		}
		this.overlay = this.overlay.bind(this);
		this.inputPhoto = this.inputPhoto.bind(this);
		this.displayPhoto = this.displayPhoto(this);
	}
	isValidFile(data) {
		return (this.validTypes.indexOf(data) !== -1) ? true : false;
	}
	inputPhoto(e){
		const file = e.target.files[0];
		console.log(file);
		if (this.isValidFile(file.type)){
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				this.displayPhoto(reader.result);
				});
			reader.readAsDataURL(file);
		} else {
			alert("Invalid file type!");
		}
		this.setState({
			photoFile: file
		})
	}

	displayPhoto(data){
		const canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
		const ctx = canvas.getContext('2d');
		let img = new Image();
		img.src = data;

		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.width, img.height);
			}
	}
	render(){
		return(
		<div className="PhotoWrapper">
			<div className="photoContainer">
				<div id="canvasContainer">
						<canvas ref="myCanvas"></canvas>
			</div>

				<div className="photoButtons">
					<label htmlFor="fileInput"></label>
					<input type="file" name="fileInput" onChange={this.inputPhoto} />
					<button type="button"className="btn--submit">Save Photo</button>

				</div>
			</div>

			<Filters 
			overlay = {this.overlay}
			/>

		</div>
		)
	}
};

export default PhotoWrapper;