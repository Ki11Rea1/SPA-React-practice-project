import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfieStatus";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={style.wallpaper}>
        <img src="https://mobimg.b-cdn.net/v3/fetch/1b/1b7900783b701ea5a5b73372e9cf0677.jpeg" />
      </div>
      <div className={style.descriptionBlock}>
        <img className={style.avatar} src={props.profile.photos.large} />
        <div className={style.status}>{props.profile.fullName}</div>
        <ProfileStatus status={"Status"} />
        <div className={style.status}>{props.profile.aboutMe}</div>
        <div className={style.contacts}>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.github}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
