import React from "react";
import style from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={style.item}>
        <img src="http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png" />
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
