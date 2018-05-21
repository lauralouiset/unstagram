import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import firebase from 'firebase';
import {
	BrowserRouter,
	Route, Link
} from 'react-router-dom';

import Header from './Header';
import PhotoWrapper from './PhotoWrapper';
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
				value: 0
				}
		}
	render() {
		return (
			<BrowserRouter>
					<div>
						<Header/>
						<Route exact path="/" component={PhotoWrapper}/>
						<Route path="/about" component={About}/>
						<Route path="/" component={Gallery}/>
						<Footer/>
					</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
