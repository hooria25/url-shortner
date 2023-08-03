import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD8nun3tCQ9NWXw6FFvHKM-hwa2Hka0-tg",
    authDomain: "url-shortner-c96df.firebaseapp.com",
    projectId: "url-shortner-c96df",
    storageBucket: "url-shortner-c96df.appspot.com",
    messagingSenderId: "600996258806",
    appId: "1:600996258806:web:0ade391af941fcdb0d9dd7",
    measurementId: "G-3TVWQ16XDP"
  };

  initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
      <App />
 </BrowserRouter>,
 document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
