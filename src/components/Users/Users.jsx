import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        avatar:
          "http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png",
        name: "Kirill",
        status: "my status1",
        city: "Moscow",
        country: "Russia",
      },
      {
        id: 2,
        followed: false,
        avatar:
          "http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png",
        name: "Nikita",
        status: "my status2",
        city: "Moscow",
        country: "Russia",
      },
      {
        id: 3,
        followed: false,
        avatar:
          "http://www.mistercar.ru/wp-content/uploads/2017/12/avatar-zero-grey-8c99a9.png",
        name: "Ashot",
        status: "my status3",
        city: "Moscow",
        country: "Russia",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avatar} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div> {u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.country}</div>
              <div>{u.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
