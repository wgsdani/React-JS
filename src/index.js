import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import data from './Data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <App data= {data}/>
  </React.StrictMode>
);