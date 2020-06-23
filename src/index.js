import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/fonts/font.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Browser} from 'react-router-dom';

ReactDOM.render(
  <Browser>  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Browser>,
  document.getElementById('root')
);

serviceWorker.unregister();
