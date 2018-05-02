import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../actions/logout";
import { fetchWalletRequest } from "../actions/wallet";
import Wallet from "./Wallet";
import Header from "./Header";
import Graph from "./Graph";

function mapStateToProps(state) {
  return {
    authorized: state.auth.authorized
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogout: () => dispatch(logout()),
    dispatchFetchWalletRequest: () => dispatch(fetchWalletRequest())
  };
}

export class Profile extends React.Component {
  logout = () => {
    this.props.dispatchLogout();
  };

  componentDidMount() {
    this.props.dispatchFetchWalletRequest();
  }

  render() {
    const { authorized } = this.props;
    return authorized ? (
      <div>
        <button onClick={this.logout}>Logout</button>
        <h1>Профиль</h1>
        <Header />
        <Wallet />
        <Graph />
      </div>
    ) : (
      <Redirect from="/profile" to="/" />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
