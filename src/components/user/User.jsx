import React, { useState } from "react";
import styles from "./User.module.css";

const User = ({ user, onInviteClick, invitedUsers }) => {
  const { id, avatar, first_name, last_name, email } = user;
  let isInvited = invitedUsers.includes(user);
  const inviteStateClass = isInvited ? styles.invited : styles.notInvited;

  const onBtnClick = (user) => {
    onInviteClick(user);
    isInvited = invitedUsers.includes(user)
  };

  return (
    <li className={styles.listItem}>
      <img src={avatar} alt={last_name} />
      <div>
        <b>
          {first_name} {last_name}
        </b>
        <p>{email}</p>
      </div>
      <button className={inviteStateClass} onClick={() => onBtnClick(user)}>
        {isInvited ? <span>-</span> : <span>+</span>}
      </button>
      {isInvited ? <span>Delete</span> : ""}
    </li>
  );
};

export default User;
