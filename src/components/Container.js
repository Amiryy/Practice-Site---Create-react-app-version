import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LibraryProject from './LibraryProject';
import TimelineProject from './TimelineProject';
import ComingSoon from './ComingSoon';
import '../styles/main.css';

const Container = () => {
	return(
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/library' component={LibraryProject}/>
			<Route exact path='/timeline' component={TimelineProject}/>
			<Route exact path='/coming-soon' component={ComingSoon}/>
		</Switch>
	)
};

export default Container;