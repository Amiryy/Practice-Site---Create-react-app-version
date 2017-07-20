import React from 'react';
import '../styles/main.css';

class Home extends React.Component{
	render () {
		return(
			<div>
				<div className="intro">
 	      			<h1>Hello!</h1>
 	      			<h3>
 	          			This is Amir, presenting my website practice!
 	          			<br />
 	         			through My learning process I will update this page using the skills I collect.
 	      			</h3>
 	   			</div>
 	   			<div className="about">
 	       			<br/>
 	   				<p>
 	       				This is my first website and it will include completely random stuff.
 	       			</p>
 	  			</div>
			</div>
		)
	}
}

export default Home;