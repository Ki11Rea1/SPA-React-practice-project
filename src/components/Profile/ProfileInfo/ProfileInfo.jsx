import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.wallpaper}>
        <img src="https://mobimg.b-cdn.net/v3/fetch/1b/1b7900783b701ea5a5b73372e9cf0677.jpeg" />
      </div>
      <div>Avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
