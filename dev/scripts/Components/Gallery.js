import React from 'react';
import firebase from 'firebase';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';


class Gallery extends React.Component{
	constructor(){
		super();
		this.state = {
			photoCollection: []
		}
	};
	// componentDidMount(){


	// 	const dbRef = firebase.database.ref('/');
	// 	dbRef.on(value, (snapshot) => {
	// 		const pastPhotos = snapshot.val();
	// 		const photoDetails = [];
	// 			for(let key in pastPhotos){
	// 				photoDetails.push({
	// 					ey: key,
	// 					singleData: pastPhotos[key]
	// 				})
	// 			}
	// 			this.setState({
	// 				photoDetails
	// 			})
	// 	} )
	// }
	render(){
		return(
			<div className="gallery">
				<h2>UNstagram Hall of Shame!</h2>
				<p>See our favourite past uglies! Why Instagram when you can UNstagram?</p>


			</div>
		)
	}
}



export default Gallery;