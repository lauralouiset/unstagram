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

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			photos:{
				currentPhoto: '',
			},
		}
		this.handleChange = this.handleChange.bind(this);
		this.uploadPhoto = this.uploadPhoto.bind(this);
	}
	handleChange(e){
		this.setState(
			{ 
				value: event.target.file
			})
	}

	uploadPhoto(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const storageRef = firebase.storage().ref();
		console.log(file.name)
		const currentImg = storageRef.child(file.name);
		// const currentPhotos = storageRef.child('/photos/currentPhotos')
		// const pastPhotos = storageRef.child('/photo/pastPhotos');
		currentPhoto.put(file).then( (snapshot) => {
		} );
		const currentPhotoURL = storageRef.child(file.name).getDownloadURL()
			.then(function (){
				this.setState (
					this.state.currentPhoto = currentPhotoURL
				)
			});
	
	}
    render() {
      return (
        <div className="wrapper">
          <Header />
					<PhotoWrapper
							uploadPhoto = {this.uploadPhoto}/>
					<Footer />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
