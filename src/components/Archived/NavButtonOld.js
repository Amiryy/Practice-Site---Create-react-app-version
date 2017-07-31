import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/main.css';
import ProjectsList from './ProjectsList';

class NavButton extends React.Component{
	constructor(){
		super ();
		this.state = {
			projects : false
		}
	}
	handleClick (btnKey) {
		switch (btnKey){
			case 'Home': 
				break;

			case 'About Me': 
				console.log ('About Me clicked, no action defined'); 
				break;

			case 'Projects': 
				this.setState ({projects : !this.state.projects});
				break;

			case 'Art': 
				console.log ('Art clicked, no action defined'); 
				break;

			case 'Contact': 
				console.log ('Contact clicked, no action defined'); 
				break;

			case 'Share Your Knowledge': 
				console.log ('Share Your Knowledge clicked, no action defined'); 
				break;
			default: ;
		}
	}
	render () {
		var buttons = ['Home', 'About Me', 'Projects', 'Art',
						 'Contact', 'Share Your Knowledge'];
			//in case of mapping an object instead of an array:
			//Object.keys(obj) creates an array of the object's properties.
		var buttonList = buttons.map(function(button){
			return ( <div key= {button} 
						  onClick = {() => this.handleClick(button)}
                  		  className='navbutton'> 
                  			<Link to={'/'+button}>{button}</Link>
                  	</div>
                  	);
		}.bind(this));
		var slideMenus = [<ProjectsList visible={this.state.projects} />];
		return(
        	<div>
            	<div class="navbutton"><a href="index.html">Home</a></div>
            	<div class="navbutton"><a href="Coming-Soon.html">About Me</a></div>
            	<div class="navbutton" id="projects-button">Projects</div>
            	<div class="navbutton"><a href="Coming-Soon.html">Art</a></div>
            	<div class="navbutton"><a href="Coming-Soon.html">Contact</a></div>
            	<div class="navbutton"><a href="Coming-Soon.html">Share Your Knowledge</a></div>
            	{slideMenus[0]}
          	</div>
   			
		)
	}
}

export default NavButton;