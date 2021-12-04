import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppState } from './AppState';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppState>,
  document.getElementById('root')
);

reportWebVitals();
