// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './myRedux/store';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>
// );



// use redux tookit with API TRY CRUD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './reduxTookit/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <HashRouter> // http://localhost:3001/#/  
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  // </HashRouter>
);
