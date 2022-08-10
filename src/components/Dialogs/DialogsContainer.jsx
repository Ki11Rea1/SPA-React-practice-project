import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageText={onMessageChange}
      data={state.messagesPage}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};

export default DialogsContainer;
