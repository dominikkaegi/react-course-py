import React from "react";

import Tabs from "./Tabs";

function LoginForm() {
  return (
    <div>
      <h2>Login Form</h2>
      <div
        style={{ height: "100px", width: "100px", background: "#fadb5f;" }}
      ></div>
    </div>
  );
}
function SignupForm() {
  return (
    <div>
      <h2>Signup Form</h2>
      <div
        style={{ height: "100px", width: "100px", background: "#62b0e8;" }}
      ></div>
    </div>
  );
}

export default function Page() {
  const tabData = [
    {
      label: "Login",
      content: <LoginForm />
    },
    {
      label: "Signup",
      content: <SignupForm />
    }
  ];

  return (
    <div style={{ maxWidth: "300px" }}>
      <Tabs data={tabData} />
    </div>
  );
}
