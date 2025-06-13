// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'
// // import { Provider } from 'react-redux'
// // import  store  from '../store.js'
// import React from 'react'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   {/* <Provider store ={store}> */}
//     <App />
//     {/* </Provider> */}
//   </BrowserRouter>,
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
