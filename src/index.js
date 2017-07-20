import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles/main.css';


ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
 	document.getElementById('root')
 );
registerServiceWorker();
