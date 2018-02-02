import React, { Component } from "react";
import { authorizeUser } from "./AuthorizeApi.js";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuthorized: props.isAuthorized,
      warning: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthorized } = nextProps;
    this.setState({ isAuthorized: isAuthorized });
  }

  handleChange = event => {
    const name = event.target.name;
    const objectToMerge = {};
    objectToMerge[name] = event.target.value;
    this.setState(objectToMerge);
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    const isAuthorized = authorizeUser(email, password);
    if (isAuthorized) {
      this.props.handleAuthorize(isAuthorized);
    } else {
      this.setState({ warning: true });
    }
  };

  render() {
    const { email, password, isAuthorized, warning } = this.state;
    return (
      <div>
        {isAuthorized && <Redirect from="/auth" to="/" />}
        <div>
          <input name="email" onChange={this.handleChange} value={email} />
          <input
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          {warning && <p className="error">Неверный пароль и/или почта.</p>}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Auth;
