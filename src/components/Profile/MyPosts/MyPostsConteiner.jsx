import React from "react";
import { addPostActionCreator } from "../../../Redux/profile-reducer";
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
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts);

export default MyPostsContainer;
