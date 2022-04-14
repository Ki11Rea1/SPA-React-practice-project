import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Kirill" },
    { id: 2, name: "Ashot" },
    { id: 3, name: "File" },
    { id: 4, name: "Yasigara" },
    { id: 5, name: "Link" },
  ];

  let dialogElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Want to hang out?" },
    { id: 4, message: "Sure" },
  ];

  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>

      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
