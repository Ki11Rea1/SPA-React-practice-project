import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let postsData = [
    { id: 1, message: "Hi, how are u?", likesCount: 2 },
    { id: 2, message: "It`s my first post", likesCount: 5 },
    { id: 3, message: "Cool! Keep learning JS and React!", likesCount: 8 },
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts data={postsData} />
    </div>
  );
};

export default Profile;
