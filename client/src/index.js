import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./Components/Context/UserContext";
import { PostsProvider } from './Components/Context/PostsContext';
import { ChannelsProvider } from "./Components/Context/ChannelsContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ChannelsProvider>
      <PostsProvider>
      <App />
      </PostsProvider>
      </ChannelsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();