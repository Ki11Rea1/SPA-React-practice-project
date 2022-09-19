import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../Utilities/Validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your post text"
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: "post",
})(AddNewPostForm);

const MyPosts = (props) => {
  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  let postsElements = props.data.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

  return (
    <div className={style.postsBlock}>
      My posts:
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
