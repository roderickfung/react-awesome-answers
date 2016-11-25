import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
// ^ this is to import jquery because jquery doesn't exist in react
// need to use npm install --save jquery on project before this
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// if you want access to variable globally in the console, you can set it as a property of the global window object.
// Only do this for testing!!
// window.$ = $;
