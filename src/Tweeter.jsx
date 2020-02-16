import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";

export default function Tweeter() {
  return (
    <div>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route>404 route not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
