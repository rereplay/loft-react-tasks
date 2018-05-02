import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { registrationRequest } from "../actions/registration";
import { loginRequest } from "../actions/login";
import { Redirect, Link } from "react-router-dom";
import Particles from 'react-particles-js';
import reactParticlesConfig from '../particles-params.js'
import './Login.css'

const formActions = ["login", "signup"];

function mapStateToProps(state) {
  return {
    authorized: state.auth.authorized
  };
}

function mapDispathToProps(dispatch) {
  return {
    dispatchLogin: options => dispatch(loginRequest(options)),
    dispatchRegistration: options => dispatch(registrationRequest(options))
  };
}

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
    actionIndex: 0
  };

  handleFormSubmit = options => {
    if (this.state.actionIndex === 0) {
      this.props.dispatchLogin(options);
    } else {
      this.props.dispatchRegistration(options);
    }
  };

  // todo validations

  changeFormAction = () => {
    this.setState({ actionIndex: (this.state.actionIndex + 1) % 2 });
  };

  render() {
    const { authorized } = this.props;
    const { email, password, actionIndex } = this.state;

    return authorized ? (
      <Redirect from="/login" to="/profile" />
    ) : (
      <div>
        <Form
          onSubmit={this.handleFormSubmit}
          validate={() => {}}
          render={({ handleSubmit }) => {
            return (
              <form className="auth-form" onSubmit={handleSubmit}>
                <h2>{formActions[actionIndex]}</h2>
                <div>
                  <Field name="email" component="input" placeholder="email" />
                </div>
                <div>
                  <Field
                    name="password"
                    component="input"
                    placeholder="password"
                  />
                </div>
                <div>
                  <button type="submit" disabled={false}>
                    Submit
                  </button>
                </div>
                <div>
                  <Link to="" onClick={this.changeFormAction}>
                    {formActions[(actionIndex + 1) % 2]}
                  </Link>
                </div>
              </form>
            );
          }}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);
