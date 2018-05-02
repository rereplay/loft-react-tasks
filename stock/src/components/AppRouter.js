import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Profile from "./Profile";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { probeToken } from "../actions/token";

function mapStateToProps(state) {
  return {
    authorized: state.auth.authorized
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchProbeToken: () => dispatch(probeToken())
  };
}

export class AppRouter extends React.Component {
  componentDidMount() {
    const {authorized, dispatchProbeToken} = this.props;
    if (!authorized) {
      dispatchProbeToken();
    }
  }
  render() {
    const { authorized } = this.props;

    return (
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);
