import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        data={props.data.postsData}
        dispatch={props.dispatch}
        newPostText={props.data.newPostText}
      />
    </div>
  );
};

export default Profile;
