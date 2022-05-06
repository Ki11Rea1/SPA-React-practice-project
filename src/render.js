import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addPost,
  sendMessage,
  updateNewMessageText,
  updateNewPostText,
} from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

//addPost("hello");

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateNewPostText={updateNewPostText}
          addPost={addPost}
          sendMessage={sendMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
