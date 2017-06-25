import React from 'react';
import '../styles/main.css';

class NavButton extends React.Component{
	constructor () {
		super(),
    	this.state = {
     	 hover: false
 	  	}
 	}
	render () {
		var buttons = ['Home', 'About Me', 'Projects', 'Art',
				 'Contact', 'Share Your Knowledge' ];
		var buttonList = buttons.map(function(button){
			return <div key= {button} className='navbutton'> {button} </div>
		});

		return(
        	<div>
            	{buttonList}
          	</div>
   			
		)
	}
}

export default NavButton;