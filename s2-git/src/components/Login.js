import React from 'react';
import { connect } from 'react-redux';
import {setToken} from '../actions/auth';
import {Redirect} from 'react-router-dom';

function mapStateToProps(state) {
  return {
    token: state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetToken: (token) => {
      dispatch(setToken(token))
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

  handleClick = () => {
    const token = this.state.value;
    this.props.dispatchSetToken(token);
  }

  render() {
    return (
      this.props.token ? (
        <Redirect from='/login' to='/user/dex157' />
      ) : (
        <div>
          <input
            onChange={this.handleChange}
            placeholder="Токен"
            value={this.state.value}
          />
          <button onClick={this.handleClick}>Сохранить</button>
        </div>
      )
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
