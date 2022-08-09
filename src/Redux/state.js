import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are u?", likesCount: 2 },
        { id: 2, message: "It`s my first post", likesCount: 5 },
        { id: 3, message: "Cool! Keep learning JS and React!", likesCount: 8 },
      ],
      newPostText: "Post text here",
    },
    messagesPage: {
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
      newMessageText: "Message text here",
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
