import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  ...props
}) => {
  return (
    <div>
      <div className={styles.paginator}>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
        />
      </div>
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
