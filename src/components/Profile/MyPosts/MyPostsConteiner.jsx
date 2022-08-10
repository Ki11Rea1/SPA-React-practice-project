import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState();

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      data={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
