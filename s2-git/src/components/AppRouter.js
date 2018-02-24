import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    errorMessage: state.network.message
  };
}

export class AppRouter extends Component {
  render() {
    const { errorMessage } = this.props;
    return (
      <div>
        {errorMessage && <h3>{errorMessage}</h3>}
        <Switch>
          <PrivateRoute path="/user/dex157" />
          <PrivateRoute path="/user/:name" />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, {})(AppRouter));
