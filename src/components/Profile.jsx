import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="content">
      <div className="water">
        <img src="https://mobimg.b-cdn.net/v3/fetch/1b/1b7900783b701ea5a5b73372e9cf0677.jpeg" />
      </div>

      <div>Avatar + description</div>

      <div>
        My posts
        <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
