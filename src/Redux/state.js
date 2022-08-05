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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this.getState());
    } else if (action.type === "SEND-MESSAGE") {
      let newMessage = {
        id: 5,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messagesData.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.messagesPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
