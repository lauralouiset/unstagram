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

		const dbRef = firebase.database().ref('/');
		dbRef.on('value', (snapshot) => {
			const data = snapshot.val();
			const pastPhotos = [];
			for (let item in data) {
				// const itemKey = data[item].key;
				const itemKey = item;
				pastPhotos.push({
					key: itemKey,
					filterData: data[item]
				})
			}
				this.setState({
					photoCollection: pastPhotos
				})
				console.log(this.state.photoCollection);
		} )
	}
		render(){
		return(
			<div className="gallery">
				<h2 className="section__header">UN<span className="cursive section__cursive">stagram</span> Hall of Fame!</h2>
				<p>Gallery Under Construction!</p>
					<div className="photoGallery">
					<img className="galleryImage"src="tonguedog.jpg" alt=""/>
						{this.state.photoCollection.map((photoItem) => {
							const filter = photoItem.filterData;
							console.log(filter);
								return(
									<div className="galleryImage" key={photoItem.key}>
									<img  src="{filter.url}" alt="Photo edited with Unstagram"
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
									</div>

							)
						})}
					</div>
			</div>
		)
	}
}



export default Gallery;