import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./component/Navigasi";
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App/>

  </React.StrictMode>
);