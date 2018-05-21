import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import firebase from 'firebase';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';

import Header from './Header';
import PhotoWrapper from './PhotoWrapper';
import Footer from './Footer';


class App extends React.Component {
	constructor(){
		super();
		this.state = {

				}
		this.handleChange = this.handleChange.bind(this);
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
