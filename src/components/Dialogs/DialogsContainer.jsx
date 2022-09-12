import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    data: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText,
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchtoProps),
  withAuthRedirect
)(Dialogs);
