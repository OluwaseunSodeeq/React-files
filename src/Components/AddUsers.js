import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserCourse, setEnteredUsercourse] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onSaveUsersData(enteredUsername, enteredUserCourse, enteredAge);
    setEnteredUsername("");
    setEnteredUsercourse("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userCourseChangeHandler = (ev) => {
    setEnteredUsercourse(ev.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classes={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="userCourse">UserCourse</label>
          <input
            id="userCourse"
            type="text"
            value={enteredUserCourse}
            onChange={userCourseChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;

/*
  const [error, setError] = useState();

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

  const submitHandler = (ev) => {
    ev.preventDefault();

    // console.log(enteredUsersname.enteredUsersCourse, enteredUsersAge);

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

    //method
    props.onSaveUsersData(
      enteredUsersname,
      enteredUsersCourse,
      enteredUsersAge
    );

    const errorHandler = () => {
      setError(null);
    };

    return (
      <Wrapper>
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
      </Wrapper>
    );
  };
  */
