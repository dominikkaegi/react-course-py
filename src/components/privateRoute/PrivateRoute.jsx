import React from "react";
import { Route, Redirect } from "react-router-dom";

const fakeAuth = {
  isAuthenticated: true
};

export default function PrivateRoute({ children, ...rest }) {
  if (!fakeAuth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest}>{children}</Route>;
}
