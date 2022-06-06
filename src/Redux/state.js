let rerenderEntireTree = () => {
  console.log("State was changed");
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const sendMessage = () => {
  let newMessage = {
    id: 5,
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
  state.messagesPage.newMessageText = newMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
