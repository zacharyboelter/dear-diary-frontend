<<<<<<< HEAD
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
=======
import React from "react";
import ReactDOM from "react-dom";
// IMPORT SCSS FILE TO BE SOURCE OF STYLING
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
>>>>>>> dev
);

