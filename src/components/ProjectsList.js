import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/main.css';
//stateless functional component with props
const ProjectsList = function (props) {
    return (
      <div id="projects-list" 
      	   className={props.visible ? "visible" : "hidden"}>
        <div className="slidebutton">
        	<Link to='/timeline'>Timeline</Link>
        </div>
        <div className="slidebutton">
        	<Link to='/library'>Library</Link>
        </div>
      </div>
    )
};
//Practice of using propTypes, the new way using prop-types package.
ProjectsList.propTypes = {
  visible : PropTypes.bool
};
export default ProjectsList;