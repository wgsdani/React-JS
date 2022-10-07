// import Navbar from './components/Navbar';
// import "antd/dist/antd.css"
// import data from './Data';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

// for redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducer';

import "./App.css"


const  store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);