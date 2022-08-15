import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
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
