import React from 'react';
import image from './assets/cr7.png';
class App extends React.Component {
	render() {
		return (
			<div>
				<p>Hello World hehe</p>
				<img src={image}></img>
			</div>
		);
	}
}

export default App;
// "dev": "webpack serve --mode=development",
