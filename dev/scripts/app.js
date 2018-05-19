import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import Header from './Header';
import PhotoWrapper from './PhotoWrapper';
import Footer from './Footer';

var config = {
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
const currentFolder = storageRef.child('currentPhoto')

class App extends React.Component {
	constructor(){
		super();
		this.state = {
				photoFile: '',
				currentPhoto: '',
				}

		this.handleChange = this.handleChange.bind(this);
		this.updatePhotoFile = this.updatePhotoFile.bind(this);
		this.submitPhoto = this.submitPhoto.bind(this);
		}
	handleChange(e){
		e.preventDefault();
		this.setState({
		value: e.target.value
		})
	}
	updatePhotoFile(e){
		const newPhoto = e.target.files[0];
		console.log(newPhoto)
		this.setState({
			value: e.target.value,
			photoFile : newPhoto
		})
	}
	submitPhoto(e){
		e.preventDefault();
		let file = this.state.photoFile;
		// create a spot for the image in Firebase directory
		const newImg = storageRef.child('currentPhoto/' + file.name);
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
			});
		}
	render() {
		return (
			<div className="wrapper">
				<Header />
				<PhotoWrapper
						handleChange = {this.handleChange}
						updatePhotoFile = {this.updatePhotoFile}
						submitPhoto = {this.submitPhoto}
						currentPhoto={this.state.currentPhoto} />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
