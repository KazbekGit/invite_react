import { useEffect, useState } from "react";
import styles from "./App.module.css";
import axios from "axios";
import UserList from "./components/userList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [invitedUsers, setInvitedUsers] = useState([]);

  const onInviteClick = (user) => {
    if (invitedUsers.includes(user)) {
      setInvitedUsers(
        [...invitedUsers].filter((currentUser) => {
          return currentUser !== user;
        })
      );
    } else {
      setInvitedUsers([...invitedUsers, user]);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.wrapper}>
      <UserList
        users={users}
        isLoading={isLoading}
        onInviteClick={onInviteClick}
        invitedUsers={invitedUsers}
      />
    </div>
  );
}

export default App;
