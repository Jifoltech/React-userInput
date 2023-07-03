import React, { useState } from "react";
import AddUser from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, updateUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    updateUsersList((prevInput) => {
      return [
        ...prevInput,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
