import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [userInput, updateUserInput] = useState({ username: "", age: "" });
  const [error, updateError] = useState();

  const AddUserHandler = (e) => {
    e.preventDefault();

    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      updateError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (parseInt(userInput.age) < 1) {
      updateError({
        title: "Invalid Age",
        message: "Please enter a valid Age (Greater than 0)",
      });
      return;
    }
    props.onAddUser(userInput.username, userInput.age);
    updateUserInput({ username: "", age: "" });
  };

  const inputChangeHandler = (input, value) => {
    updateUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const errorHandler = () => {
    updateError(null);
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
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
            id="username"
            value={userInput["username"]}
          />
          <label htmlFor="age">Age (Years):</label>
          <input
            type="number"
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            id="age"
            value={userInput["age"]}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
