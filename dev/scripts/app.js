import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import firebase from 'firebase';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Header from './Components/Header';
import PhotoWrapper from './Components/PhotoWrapper';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
				value: 0
				}
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
		

	render() {
		return (
			<Router>
					<div>
						<Header/>
						<Route exact path="/" component={PhotoWrapper}/>
						<Route path="/about" component={About}/>
						<Route path="/gallery" component={Gallery}/>
						<Footer/>
					</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
