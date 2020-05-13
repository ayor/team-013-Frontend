// import app from './app';

// const startApp = async () => {
//   const header = document.querySelector('[data-app-name]');
//   if (!header) return;

//   const programName = await app();
//   header.textContent = programName;
// };

// document.addEventListener('DOMContentLoaded', startApp);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('div'));
