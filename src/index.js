import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles/main.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
