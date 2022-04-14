import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are u?", likesCount: 2 },
    { id: 2, message: "It`s my first post", likesCount: 5 },
    { id: 3, message: "Cool! Keep learning JS and React!", likesCount: 8 },
  ];

  let postsElements = postsData.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

  return (
    <div className={style.postsBlock}>
      My posts:
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
