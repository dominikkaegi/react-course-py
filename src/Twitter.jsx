import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";
import Profile from "pages/profile/Profile";

export default function Twitter() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
