import React from 'react';
import Filters from './Filters';


class PhotoWrapper extends React.Component {
	constructor(){
		super()
	}
	componentDidMount(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
		const img = this.refs.image;
		
		img.onLoad = () => {
			ctx.drawImage(this.state.currentPhoto,x,y);
		} 
	}
	render(){
		return(
		<div className="PhotoWrapper">

			<div className="photoContainer">
				<div id="canvasContainer">
					<canvas ref="canvasDisplay"></canvas>
					<img src={this.state.currentPhoto} alt=""/>
				</div>

				<div className="photoButtons">
					<input onChange={ this.props.uploadPhoto }  className="btn-submit" type="file"/>
					<button className="btn--submit">Upload Photo</button>
					<button className="btn--submit">Save Photo</button>
				</div>
			</div>

			<Filters />
		</div>
		)
	}
};




export default PhotoWrapper;