import React from "react";
import styles from "./UserList.module.css";
import Card from "../Ui/Card";

const UserList = (props) => {
  return (
    <Card classes={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            My name is {user.name}, I am {user.age} years old, studying{" "}
            {user.course}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
