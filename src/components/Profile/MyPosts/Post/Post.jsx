import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <div className={style.avatar}>
          <img src="http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png" />
        </div>

        <text className={style.message}>{props.message}</text>

        <div className={style.likes}>
          <div className={style.counter}>{props.likes}</div>
          <span> like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
