import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import firebase from 'firebase';
// import { Stage, Layer, Rect, Text } from 'react-konva';
// import konva from 'Konva';
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

class App extends React.Component {
	constructor(){
		super();
		this.state = {

				}

		this.handleChange = this.handleChange.bind(this);

		// this.submitPhoto = this.submitPhoto.bind(this);
		}
	handleChange(e){
		e.preventDefault();
		this.setState({
		value: e.target.value
		})
	}


	render() {
		return (
			<div className="wrapper">
				<Header />
				<PhotoWrapper
						handleChange = {this.handleChange} />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
