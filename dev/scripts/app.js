import React from 'react';
import ReactDOM from 'react-dom';
// import Firebase from 'firebase';
import Header from './Header';
import PhotoWrapper from './PhotoWrapper';
import Footer from './Footer';


// Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyARNtT04asipwsNU6H_OqvJ4NUmGXl95bQ",
// 	authDomain: "uglygram-666.firebaseapp.com",
// 	databaseURL: "https://uglygram-666.firebaseio.com",
// 	projectId: "uglygram-666",
// 	storageBucket: "",
// 	messagingSenderId: "351785856531"
// };
// firebase.initializeApp(config);



class App extends React.Component {
    render() {
      return (
        <div className="wrapper">
          <Header />
					<PhotoWrapper />
					<Footer />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
