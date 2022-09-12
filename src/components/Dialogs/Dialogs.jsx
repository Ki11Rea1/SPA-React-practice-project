import React from "react";
import { Navigate } from "react-router-dom";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.data.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.data.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>

      <div className={style.messages}>
        {messagesElements}
        <div className={style.messageBox}>
          <textarea onChange={onMessageChange} value={props.newMessageText} />
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
