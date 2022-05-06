import React from "react";
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

  let newMessageText = React.createRef();

  let sendMessage = () => {
    let text = newMessageText.current.value;
    props.sendMessage(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>

      <div className={style.messages}>
        {messagesElements}
        <div className={style.messageBox}>
          <textarea
            ref={newMessageText}
            defaultValue="Write message"
          ></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
