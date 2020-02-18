import React from "react";

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
    <div>
      <Tabs data={tabData} />
    </div>
  );
}

function Tabs() {
  return <div>Your Tabs</div>;
}

function LoginForm() {
  return <div>Login Form</div>;
}

function SignupForm() {
  return <div>SignupForm</div>;
}
