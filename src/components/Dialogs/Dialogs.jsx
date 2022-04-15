import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messagesData.map((m) => (
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
