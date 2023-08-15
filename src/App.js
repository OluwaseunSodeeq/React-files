import React, { useState } from "react";
import AddUsers from "./Components/AddUsers";
import UserList from "./Components/UserList";

function App() {
  const [userList, setUsersList] = useState([]);

  const saveUserDataHandler = (uName, uCourse, uAge) => {
    setUsersList((prevListItems) => {
      return [
        ...prevListItems,
        {
          name: uName,
          course: uCourse,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  console.log(userList);

  // const saveUserDataHandler = (enteredData) => {
  //   const userData = { ...enteredData };
  //   // props.onAddData(userData);
  // };

  // using empty tag<> / <React.Fragment> / <Fragment> to return adjacent of element
  return (
    <>
      <AddUsers onSaveUsersData={saveUserDataHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
