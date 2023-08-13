import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "./ErrorModal";

const AddUsers = (props) => {
  const [enteredUsersname, setEnteredUsername] = useState("");
  const userNameChangehandler = (ev) => {
    setEnteredUsername(ev.target.value);
  };

  const [enteredUsersCourse, setEnteredUsersCourse] = useState("");
  const usersCourseChangeHandler = (ev) => {
    setEnteredUsersCourse(ev.target.value);
  };

  const [enteredUsersAge, setEnteredUsersAge] = useState("");
  const usersAgeChangeHandler = (ev) => {
    setEnteredUsersAge(ev.target.value);
  };

  const [error, setError] = useState();

  const submitHandler = (ev) => {
    ev.preventDefault();
    console.log(enteredUsersname.enteredUsersCourse, enteredUsersAge);
    if (
      enteredUsersname.trim().length === 0 ||
      enteredUsersAge.trim().length === 0
    ) {
      setError({
        title: "invalid Input",
        message: " Please Enter Valid Name and Age (empty field is not allowed",
      });
      return;
    }

    if (+enteredUsersAge < 1) {
      setError({
        title: "invalid Age",
        message: "Please Enter Valid Age ( > 0)",
      });
      return;
    }

    // const usersData = {
    //   name: enteredUsername,
    //   course: enteredUsersCourse,
    //   age: +enteredUsersAge,
    // };

    //method
    props.onSaveUsersData(
      enteredUsersname,
      enteredUsersCourse,
      +enteredUsersAge
    );
    console.log(enteredUsersname, enteredUsersCourse, enteredUsersAge);

    setEnteredUsername("");
    setEnteredUsersCourse("");
    setEnteredUsersAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classes={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            value={enteredUsersname}
            onChange={userNameChangehandler}
          />

          <label htmlFor="userCourse">User Course</label>
          <input
            id="userCourse "
            type="text"
            value={enteredUsersCourse}
            onChange={usersCourseChangeHandler}
          />

          <label htmlFor="age"> Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUsersAge}
            onChange={usersAgeChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUsers;
