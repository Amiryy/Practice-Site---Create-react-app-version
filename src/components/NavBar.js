import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/main.css';
import ProjectsList from './ProjectsList';

class NavBar extends React.Component{
	constructor(){
		super ();
		this.state = {
			projects : false
		}
	}
	showProjects () {
		this.setState ({projects : true});			
	}
	hideProjects () {
		this.setState ({projects : false})
	}

	render () {
		return(
        	<div className="navbar" onMouseLeave = {this.hideProjects.bind(this)}>
            	<div className="navbutton" 
            		 onMouseOver = {this.hideProjects.bind(this)}>
            		<Link to='/'>Home</Link>
            	</div>
            	<div className="navbutton"
            		 onMouseOver = {this.hideProjects.bind(this)}>
            		<Link to='/coming-soon'>About Me</Link>
            	</div>
            	<div className="navbutton"
            	  	 onMouseOver = {this.showProjects.bind(this)}>
            	  	 Projects
            	</div>
            		<ProjectsList visible={this.state.projects} />
            	<div className="navbutton"
            		 onMouseOver = {this.hideProjects.bind(this)}>
            		<Link to='/coming-soon'>Art</Link>
            	</div>
            	<div className="navbutton"
            		 onMouseOver = {this.hideProjects.bind(this)}>
            		<Link to='/coming-soon'>Contact</Link>
            	</div>
            	<div className="navbutton"
            		 onMouseOver = {this.hideProjects.bind(this)}>
            		<Link to='/coming-soon'>Share Your Knowledge</Link>
            	</div>
          	</div>
   			
		)
	}
}

export default NavBar;