import React from 'react';
import NavBar from './NavBar';
import Sides from './Sides';
import Container from './Container';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web', 'Droid Sans', 'Amatic SC', 'Roboto', 'Lato']
  }
});
class App extends React.Component{
	render() {
		return (
			<div>
				<NavBar />
				<Sides />
				<Container />
			</div>
		)
	}
}

export default App;