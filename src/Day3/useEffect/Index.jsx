import React from "react";

import AddUserForm from "./Day2/Forms/AddUserForm.solution";
import UserList from "./UserList";

export default function App() {
  return (
    <div>
      <div>
        <AddUserForm />
        <UserList />
      </div>
    </div>
  );
}
