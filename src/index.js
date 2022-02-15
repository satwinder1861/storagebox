import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
  import {Homepage,Loginpage,Profilepage} from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './store';
import {Provider} from 'react-redux';
const store = createStore(rootReducer);
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
  <Routes>
        <Route path="/storagebox" element={<Homepage/>}/>
        <Route path="/Login" element={<Loginpage/>}/>
        <Route path="/Profile" element={<Profilepage/>}/>
  </Routes>
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
