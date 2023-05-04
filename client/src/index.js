import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./Components/Context/UserContext";
import { PostsProvider } from './Components/Context/PostsContext';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>
      <App />
      </PostsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();