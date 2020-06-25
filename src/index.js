import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/fonts/font.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Browser} from 'react-router-dom';
import DataContextProvider from './Context';

ReactDOM.render(
  <Browser>  
    <React.StrictMode>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </React.StrictMode>
  </Browser>,
  document.getElementById('root')
);

serviceWorker.unregister();
