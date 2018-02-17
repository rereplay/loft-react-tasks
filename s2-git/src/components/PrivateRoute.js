import React from "react";
import { connect } from "react-redux";
import UserPage from "./UserPage";
import { Redirect, Route } from "react-router-dom";

function mapStateToProps(state) {
  return {
    token: state.auth.token 
  };
}

export class PrivateRoute extends React.Component {
  render() {
    const { token } = this.props;
    return(
      token && <Route path={this.props.path} component={UserPage} />
    )
  }
}

export default connect(mapStateToProps, {})(PrivateRoute);
