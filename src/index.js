import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./component/Navigasi";
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={"Deem"} job={"peserta"}/>
    <App name={"Dani"} job={"peserta"}/>
  </React.StrictMode>
);

// renderDOM(element,"root")