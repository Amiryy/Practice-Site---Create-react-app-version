import React from 'react';
import '../styles/main.css';

class TimelineProject extends React.Component{
	render () {
		return(
			<div>
				<div className="intro">
    			   <h1>Timeline</h1>
    			   <h3>
    			       Welcome to the Timeline page.
    			       here you can write down anything you want and it will add to the timeline,
    			       storing the information and presenting it one after another.
    			   </h3>
    			</div>
    			
    			<div className="textBox">
    				<textarea id ="textBox" className="textBox" 
    						  placeholder="Post something on Timeline!" 
    						  rows="3" 
    						  wrap="soft"></textarea>
    			    <button className="textBox">Post</button>
    			</div>
			</div>
		)
	}
}

export default TimelineProject;