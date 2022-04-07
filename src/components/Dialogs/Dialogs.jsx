import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Kirill" id="1" />
        <DialogItem name="Ashot" id="2" />
        <DialogItem name="File" id="3" />
        <DialogItem name="Yasigara" id="4" />
        <DialogItem name="Link" id="5" />
      </div>

      <div className={style.messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="Want to hang out?" />
        <Message message="Sure" />
      </div>
    </div>
  );
};

export default Dialogs;
