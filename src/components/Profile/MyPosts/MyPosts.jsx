import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      My posts:
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how are u?" likes="2" />
        <Post message="It`s my first post" likes="3" />
      </div>
    </div>
  );
};

export default MyPosts;
