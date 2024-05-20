import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // assuming you have styles here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This ID must match the HTML element ID in index.html
);
