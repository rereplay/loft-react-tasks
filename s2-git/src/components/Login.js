import React from "react";
import { connect } from "react-redux";
import { authorize } from "../actions/auth";
import { Redirect } from "react-router-dom";

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthorize: token => {
      dispatch(authorize(token));
    }
  };
}

export class Login extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const token = this.state.value;
      this.props.dispatchAuthorize(token);
    }
  };

  render() {
    return this.props.token ? (
      <Redirect from="/login" to="/user/me" />
    ) : (
      <div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Токен"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
