const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Kirill" },
    { id: 2, name: "Ashot" },
    { id: 3, name: "File" },
    { id: 4, name: "Yasigara" },
    { id: 5, name: "Link" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Want to hang out?" },
    { id: 4, message: "Sure" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 5,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};

export default dialogsReducer;
