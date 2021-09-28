import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgfZx7nC4igBz8TFnDlzPE4DSz3RHNcV8",
  authDomain: "cart-f4687.firebaseapp.com",
  projectId: "cart-f4687",
  storageBucket: "cart-f4687.appspot.com",
  messagingSenderId: "182126516730",
  appId: "1:182126516730:web:a49dacbee94bb00fc22c43",
  measurementId: "G-5YBGH3JM7Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
