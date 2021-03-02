import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './main.scss'


ReactDOM.render(<App />,document.getElementById('root'));

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());