// Y is useRef not working

import React, { useState, useRef } from "react";
import styles from "./AddUsers.module.css";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Wrapper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const courseInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const enteredName = nameInputRef.current.value;
  const ageEntered = ageInputRef.current.value;
  const enteredCourse = courseInputRef.current.value;

  console.log(enteredName, enteredCourse, ageEntered);

  const submitHandler = (ev) => {
    ev.preventDefault();

    console.log(enteredName, enteredCourse, ageEntered);

    if (enteredName.trim().length === 0 || ageEntered.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: " Please Enter Valid Name and Age (empty field is not allowed",
      });
      return;
    }

    if (+ageEntered < 1) {
      setError({
        title: "invalid Age",
        message: "Please Enter Valid Age ( > 0)",
      });
      return;
    }

    //method
    props.onSaveUsersData(enteredName, enteredCourse, ageEntered);
    // props.onSaveUsersData(nameInputRef, courseInputRef, ageInputRef);
    enteredName.current.value = "";
    enteredCourse.current.value = "";
    ageEntered.current.value = "";

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

            <input id="username" type="text" ref={nameInputRef} />

            <label htmlFor="userCourse">User Course</label>
            <input id="userCourse " type="text" ref={courseInputRef} />

            <label htmlFor="age"> Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef} />

            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </Wrapper>
    );
  };
};
export default AddUser;
