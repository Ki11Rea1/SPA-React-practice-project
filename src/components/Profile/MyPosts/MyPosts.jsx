import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts:
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how are u?" />
        <Post message="It`s my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
