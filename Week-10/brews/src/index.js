import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Tile from './components/Tile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
