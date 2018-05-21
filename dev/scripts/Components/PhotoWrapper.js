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
			currentPhoto: '../../../assets/placeholder.jpg',
			blur: '0',
			contrast: '100',
			brightness: '100',
			invert: '0',
			hueRotate: '0',
			saturate: '100',
			sepia: '0',

		}
		this.inputPhoto = this.inputPhoto.bind(this);
		this.filter1 = this.filter1.bind(this);
		this.fadedNewspaper = this.fadedNewspaper.bind(this);
		this.resetPhoto = this.resetPhoto.bind(this);

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
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			value: e.target.value
		})
	}

	isValidFile(data) {
		return (this.validTypes.indexOf(data) !== -1) ? true : false;
	}
	inputPhoto(e) {
		const file = e.target.files[0];
		if (this.isValidFile(file.type)) {
			// create a spot for the image in Firebase directory
			const storageRef = firebase.storage().ref();
			const newImg = storageRef.child('currentPhotos/' + file.name);
			this.setState({
				currentPhoto: '../../../assets/loader.gif'
			})
			// upload file to Firebase
			newImg.put(file).then((snapshot) => {
				//retrieve new url of image from Firebase
				newImg.getDownloadURL().then((url) => {
					console.log(url);
					this.setState({
						//update state to make currentPhoto URL available to canvas
						currentPhoto: url
					})
				})
				console.log('photo submitted!')
			});
		} else {
			alert("Invalid file type!");
		}
		this.setState({
			photoFile: file
		})
	}
	filter1(e){
		e.preventDefault();
		console.log('filter1!')
		this.setState({
			blur: '1px',
			saturate: '250',
			brightness: '130',
			sepia: '0',
			invert:'0'
		})
	}
	fadedNewspaper(e){
		e.preventDefault();
		console.log('faded!')
		this.setState({
			contrast: '60',
			brightness: '80',
			invert: '0',
			saturate: '100',
			sepia: '100',
			blur: '',
			greyscale: '25'
		})
	}
	
	resetPhoto(e) {
		e.preventDefault();
		this.setState({
			contrast: '100',
			brightness: '100',
			invert: '0',
			blur: '0',
			saturate: '100',
			sepia: '0',
		})
	}

	render(){
		return(
		<div className="PhotoWrapper">
				<div className="photoWrapper__section filterInputs">
					<form action="">
						<label htmlFor="fileInput"></label>
						<input type="file" name="fileInput" onChange={this.inputPhoto} />
						<div className="filterButtons">
							<button onClick={this.filter1} className="btn__filter">Filter 1</button>
							<button className="btn__filter">Filter 2</button>
							<button onClick={this.fadedNewspaper} className="fadedNewspaper btn__filter">Yellowed Newspaper</button>
							<button className="btn__filter">Filter 4</button>
							<button className="btn__filter">Filter 5</button>
							<button className="btn__filter">Filter 6</button>
							<button className="btn__filter">Filter 7</button>
							<button onClick={this.resetPhoto} className="btn__filter">Reset Photo</button>
						</div>
						<button className="btn__">Save Photo</button>
					</form>
				</div>


			<div className="photoWrapper__section photoContainer">
						<img
							src={this.state.currentPhoto}
							alt=""
							style={{
								WebkitFilter:
									`contrast(${this.state.contrast}%)` +
									`brightness(${this.state.brightness}%)` +
									`blur(${this.state.blur})` +
									`invert(${this.state.invert})` +
									`hue-rotate(${this.state.hueRotate})` +
									`saturate(${this.state.saturate}%)` +
									`sepia(${this.state.sepia}%)` +
									`invert(${this.state.invert}%)`
							}}
						/>
			</div>

		</div>
		)
	}
};

export default PhotoWrapper;