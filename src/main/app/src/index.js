import React from 'react';
import ReactDOM from 'react-dom'
//import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import NdaPage from './content/NdaPage';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
);