import React from 'react';
import NavButton from './NavButton';
import '../styles/main.css'

class NavBar extends React.Component{
  toggleHover () {
      this.setState({ hover: !this.state.hover })
  }
	render () {
		return(
			 <div className='nav'>
        	<NavButton />
   			</div>
		)
	}
}

export default NavBar;