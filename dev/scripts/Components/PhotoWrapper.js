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
			brightness: '100',
			contrast: '100',
			grayscale: '0',
			hueRotate: '0',
			invert: '0',
			saturate: '100',
			sepia: '0'
		}
		this.inputPhoto = this.inputPhoto.bind(this);
		this.shakyCamera = this.shakyCamera.bind(this);
		this.fadedNewspaper = this.fadedNewspaper.bind(this);
		this.fluorescent = this.fluorescent.bind(this);
		this.badFlash = this.badFlash.bind(this);
		this.fake1970s = this.fake1970s.bind(this);
		this.acidTrip = this.acidTrip.bind(this);
		this.xRay = this.xRay.bind(this);
		this.resetPhoto = this.resetPhoto.bind(this);
		this.savePhoto = this.savePhoto.bind(this);

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
					this.setState({
						//update state to make currentPhoto URL available to canvas
						currentPhoto: url
					})
				})
				console.log('photo submitted!')
			});
		} else {
			alert("I can't UNstagram that! Please try a .jpg or .png!");
		}
		this.setState({
			photoFile: file,
			blur: '0',
			brightness: '100',
			contrast: '100',
			grayscale: '0',
			hueRotate: '0',
			invert: '0',
			saturate: '100',
			sepia: '0'
		})
	}
	shakyCamera(e){
		e.preventDefault();
		this.setState({
			contrast: '100',
			blur: '1',
			saturate: '250',
			brightness: '130',
			sepia: '0',
			invert:'0'
		})
	}
	fluorescent(e){
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '100',
			contrast: '89',
			grayscale: '0',
			hueRotate: '25',
			invert: '0',
			saturate: '61',
			sepia: '0'
		})
	}
	fadedNewspaper(e){
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '80',
			contrast: '90',
			grayscale: '40',
			hueRotate: '0',
			invert: '0',
			saturate: '100',
			sepia: '100'
		})
	}
	badFlash(e){
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '120',
			contrast: '160',
			grayscale: '0',
			hueRotate: '0',
			invert: '0',
			saturate: '130',
			sepia: '15'
		})
	}
	fake1970s(e) {
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '100',
			contrast: '75',
			grayscale: '0',
			hueRotate: '0',
			invert: '0',
			saturate: '200',
			sepia: '50'
		})
	}
	acidTrip(e) {
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '100',
			contrast: '100',
			grayscale: '0',
			hueRotate: '212',
			invert: '0',
			saturate: '150',
			sepia: '0'
		})
	}
	xRay(e) {
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '90',
			contrast: '100',
			grayscale: '0',
			hueRotate: '0',
			invert: '100',
			saturate: '130',
			sepia: '0'
		})
	}
	resetPhoto(e) {
		e.preventDefault();
		this.setState({
			blur: '0',
			brightness: '100',
			contrast: '100',
			grayscale: '0',
			hueRotate: '0',
			invert: '0',
			saturate: '100',
			sepia: '0'
		})
	}
	savePhoto(e){
		e.preventDefault();

		const photoDetails = {
			url: this.state.currentPhoto,
			blur: this.state.blur,
			brightness: this.state.brightness,
			contrast: this.state.contrast,
			grayscale: this.state.grayscale,
			hueRotate: this.state.hueRotate,
			invert: this.state.invert,
			saturate: this.state.saturate,
			sepia: this.state.sepia
		}
		const galleryRef = firebase.database().ref('/');
		galleryRef.push(photoDetails);
		alert('Your photo has been sent to the UNstagram Hall of Shame!')
		

	}

	render(){
		return(
		<div className="PhotoWrapper">
				<div className="photoWrapper__section filterInputs">
					<form action="">
						<input id="fileInput" type="file" className="fileInput" name="fileInput" onChange={this.inputPhoto} />
						<label className="btn__utility" htmlFor="fileInput">Upload Your Photo</label>
						<div className="filterButtons">
							<button onClick={this.shakyCamera} className="shakyCamera btn__filter">Shaky Camera</button>
							<button onClick={this.fluorescent} className="fluorescent btn__filter">Fluorescent Lighting</button>
							<button onClick={this.fadedNewspaper} className="fadedNewspaper btn__filter">Faded Newspaper</button>
							<button onClick={this.badFlash} className="badFlash btn__filter">Bad Flash</button>
							<button onClick={this.fake1970s} className="fake1970s btn__filter">Fake 1970s</button>
							<button onClick={this.acidTrip} className="acidTrip btn__filter">Acid Trip</button>
							<button onClick={this.xRay} className="xRay btn__filter">X-Ray</button>
							<button onClick={this.resetPhoto} className="btn__filter">Start Over</button>
						</div>
						</form >

						<form className="saveForm" onSubmit={this.savePhoto}>
							<button type="submit "className="btn__utility">Save in UNstagram gallery!</button>
					</form>
				</div>


			<div className="photoWrapper__section photoContainer">
						<img className="unstagramImage"
							src={this.state.currentPhoto}
							alt="Photo Edited with Unstagram"
							style={{
								WebkitFilter:
									`blur(${this.state.blur}px)` +
									`brightness(${this.state.brightness}%)` +
									`contrast(${this.state.contrast}%)` +
									`grayscale(${this.state.grayscale}%)` +
									`hue-rotate(${this.state.hueRotate}deg)` +
									`invert(${this.state.invert}%)` +
									`saturate(${this.state.saturate}%)` +
									`sepia(${this.state.sepia}%)` 
							}}
						/>
			</div>

		</div>
		)
	}
};

export default PhotoWrapper;