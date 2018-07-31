import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Game from './Game';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
