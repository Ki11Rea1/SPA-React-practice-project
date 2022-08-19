import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    data: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchtoProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts);

export default MyPostsContainer;
