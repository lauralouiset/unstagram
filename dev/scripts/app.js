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
		}
	render() {
		return (
			<Router>
					<div>
						<Header/>
						<Route exact path="/" component={PhotoWrapper}/>
						<Route path="/" component={About}/>
						<Route path="/" component={Gallery}/>
						<Footer/>
					</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
