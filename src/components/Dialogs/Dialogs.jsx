import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
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

  let sendMessage = () => {
    let action = sendMessageActionCreator();
    props.dispatch(action);
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>

      <div className={style.messages}>
        {messagesElements}
        <div className={style.messageBox}>
          <textarea
            onChange={onMessageChange}
            value={props.data.newMessageText}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
