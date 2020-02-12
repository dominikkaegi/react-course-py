import React, { useEffect, useState } from "react";
import { getUsers, createUser, getUserById } from "../../utils/faker_api";

export default function UserList() {
  let [users, setUsers] = useState(null);
  let [error, setError] = useState(null);

  const handleGetUsers = () => {
    getUsers().then(data => {
      setUsers(data);
      console.log(JSON.stringify(data));
    });
  };

  const handleDeleteUser = () => {};

  const handleAddUser = () => {};

  return (
    <div>
      <button onClick={handleGetUsers}>Get Users</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
