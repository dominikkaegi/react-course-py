import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "components/privateRoute/PrivateRoute";

import Home from "pages/home/Home";
import Dashboard from "pages/dashboard/Dashboard";
import Navbar from "components/navbar/Navbar";

export default function Tweeter() {
  return (
    <div>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Navbar />
            <Dashboard />
          </PrivateRoute>
          <Route>404 route not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
