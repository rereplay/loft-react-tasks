import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

export class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/user/dex157" />
        <PrivateRoute path="/user/:name" />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/login" />
      </Switch>
    );
  }
}

export default withRouter(connect(
  mapStateToProps
)(AppRouter))
