import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
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

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsData={dialogsData}
                  messagesData={messagesData}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile postsData={postsData} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
