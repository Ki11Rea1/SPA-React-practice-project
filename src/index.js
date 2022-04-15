import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postsData = [
  { id: 1, message: "Hi, how are u?", likesCount: 2 },
  { id: 2, message: "It`s my first post", likesCount: 5 },
  { id: 3, message: "Cool! Keep learning JS and React!", likesCount: 8 },
];

let dialogsData = [
  { id: 1, name: "Kirill" },
  { id: 2, name: "Ashot" },
  { id: 3, name: "File" },
  { id: 4, name: "Yasigara" },
  { id: 5, name: "Link" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Want to hang out?" },
  { id: 4, message: "Sure" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
