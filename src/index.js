// import Navbar from './components/Navbar';
// import "antd/dist/antd.css"
// import data from './Data';
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/reduxThunk/App";

// // for redux
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// // import reducerCount from './redux/reducerCount';
// import reducers from "./reducers";
// import thunk from "redux-thunk";

// Styling Css
import "./App.css"

// const store = createStore(reducers, applyMiddleware(thunk));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>()
//     <App />
//   </Provider>
// );



// npm i --save react-redux axios redux-thunk lodash
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore
  //  applyMiddleware 
  } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import App from './App'
import reducers from './reducers/index';

const store = createStore(
  reducers,
  //  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() &&
    composeWithDevTools()
  );
//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

