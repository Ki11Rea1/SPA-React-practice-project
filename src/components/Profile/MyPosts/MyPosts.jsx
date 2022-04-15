import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.data.map((p) => (
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
