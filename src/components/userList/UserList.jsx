import React, { useState } from "react";
import User from "../user/User";
import styles from "./UserList.module.css";
import Skeleton from "../skeleton/Skeleton";

const UserList = ({ users, isLoading, onInviteClick, invitedUsers }) => {
  const [value, setValue] = useState("");
  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search a friend..."
        value={value}
        onChange={onInputChange}
      />

      <ul>
        {users
          .filter((user) => {
            const fullName = user.first_name.toLowerCase() + ' ' + user.last_name.toLowerCase()
            return (
            fullName.includes(value.toLowerCase()) ||
              user.email.toLowerCase().includes(value.toLowerCase())
            );
          })
          .map((user) =>
            isLoading ? (
              <Skeleton />
            ) : (
              <User
                user={user}
                key={user.id}
                onInviteClick={onInviteClick}
                invitedUsers={invitedUsers}
              />
            )
          )}
      </ul>
    </div>
  );
};

export default UserList;
