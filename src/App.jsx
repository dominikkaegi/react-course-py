import React from "react";
import "./style.css";

import AddUserForm from "./Day2/Forms/AddUserForm.solution";
import UserList from "./Day3/useEffect/UserList.solution";
import ContextExample from "./Day3/useContext/index";
import Tabs from "./Day3/compoundComponent/CompoundTabs";

export default function App() {
  return (
    <div>
      {/* <div>
        <AddUserForm />
        <UserList />
      </div> */}
      {/* <ContextExample /> */}
      <Tabs />
    </div>
  );
}
