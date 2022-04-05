import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={style.wallpaper}>
        <img src="https://mobimg.b-cdn.net/v3/fetch/1b/1b7900783b701ea5a5b73372e9cf0677.jpeg" />
      </div>

      <div>Avatar + description</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
