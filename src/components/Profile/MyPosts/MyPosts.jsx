import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are u?", likesCount: 2 },
    { id: 2, message: "It`s my first post", likesCount: 5 },
  ];

  return (
    <div className={style.postsBlock}>
      My posts:
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likesCount} />
        <Post message={postsData[1].message} likes={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
