import React from "react";
import "./style.css";

// import Form from "./Day1/useState/LoginForm";
// import Form from "./Day1/useState/LoginForm.solution";
// import Counter from "./Day1/useState/Counter";
// import Counter1 from "./Day1/useState/Counter.solution";

import AddUserForm from "./Day2/Forms/AddUserForm.solution";
import UserList from "./Day2/UseEffect/UserList";

export default function App() {
  return (
    <div className="app">
      <AddUserForm />
      <UserList />
    </div>
  );
}
