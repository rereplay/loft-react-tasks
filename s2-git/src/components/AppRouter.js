import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/user/dex157" />
        <PrivateRoute path="/user/:name" />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}
