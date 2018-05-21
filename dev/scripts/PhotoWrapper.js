import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';


class PhotoWrapper extends React.Component {

	constructor(props){
		super();
		this.validTypes = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg'];
		this.state = {
			photoFile: '',
			dataURL: '',
			result: '',

		}
		this.overlay = this.overlay.bind(this);
		this.inputPhoto = this.inputPhoto.bind(this);
		this.updateCanvas = this.updateCanvas.bind(this);
	}
	componentDidMount(){
		const config = {
			apiKey: "AIzaSyARNtT04asipwsNU6H_OqvJ4NUmGXl95bQ",
			authDomain: "uglygram-666.firebaseapp.com",
			databaseURL: "https://uglygram-666.firebaseio.com",
			projectId: "uglygram-666",
			storageBucket: "uglygram-666.appspot.com",
			messagingSenderId: "351785856531"
		};
		firebase.initializeApp(config);
		// sets Firebase as storage location
		const storageRef = firebase.storage().ref();

		this.updateCanvas(this.state.result)

	}

	isValidFile(data) {
		return (this.validTypes.indexOf(data) !== -1) ? true : false;
	}
	inputPhoto(e) {
		const file = e.target.files[0];
		console.log(file);
		if (this.isValidFile(file.type)) {
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				this.updateCanvas(reader.result);
				const results = reader.result;
				this.setState({
					result : result
				})
			});
			reader.readAsDataURL(file);
		} else {
			alert("Invalid file type!");
		}
		this.setState({
			photoFile: file
		})
	}

	updateCanvas(data) {
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
					<img src="" alt=""/>
				</div>
			</div>

				<div className="photoButtons">
					<label htmlFor="fileInput"></label>
					<input type="file" name="fileInput" onChange={this.inputPhoto} />
					<button onClick={this.savePhoto}type="button"className="btn--submit">Save Photo</button>
				</div>

				<div className="filter">
					<h2>Uglify Your Photo</h2>
					<div className="buttonContainer">
						<button onClick={this.overlay} className="overlay btn__filter">Filter 1</button>
						<button className="btn__filter">Filter 2</button>
						<button className="btn__filter">Filter 3</button>
						<button className="btn__filter">Filter 4</button>
						<button className="btn__filter">Filter 5</button>
						<button className="btn__filter">Filter 6</button>
						<button className="btn__filter">Reset Photo</button>
						<button className="btn__filter">Save Photo</button>
						<div>
						</div>
					</div>
				</div>

		</div>
		)
	}
};

export default PhotoWrapper;