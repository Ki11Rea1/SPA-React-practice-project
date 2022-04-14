import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

export default Message;
