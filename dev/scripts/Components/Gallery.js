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
	componentDidMount(){
		const dbRef = firebase.database.ref('/');
		dbRef.on(value, (snapshot) => {
			const pastPhotos = snapshot.val();
			const photoDetails = [];
				for(let key in pastPhotos){
					photoDetails.push({
						key: key,
						singleData: pastPhotos[key]
					})
				}
				this.setState({
					photoCollection: photoDetails
				})
		} )
	}
	render(){
		return(
			<div className="gallery">
				<h2 className="section__header">UN<span className="cursive section__cursive">stagram</span> Hall of Shame!</h2>
				<p>See our favourite past uglies! Why Instagram when you can UNstagram?</p>
					<ul className="photoGallery">
						{this.state.photoCollection.map((singlePhoto) => {
							const filter = singlePhoto.Collection
								return(
									<li key="singlePhoto">
									<img src="{filter.url}" alt="Photo edited with Unstagram"
									style={{WebkitFilter:
										`blur(${filter.contrast}px)` +
										`brightness(${filter.brightness}%)` +
										`contrast(${filter.contrast}%)` +
										`grayscale(${filter.grayscale}%)` +
										`hue-rotate(${filter.hueRotate}deg)` +
										`invert(${filter.invert}%)` +
										`saturate(${filter.saturate}%)` +
										`sepia(${filter.sepia}%)` }}
										/>
									</li>
							)
						})}
					</ul>
			</div>
		)
	}
}



export default Gallery;