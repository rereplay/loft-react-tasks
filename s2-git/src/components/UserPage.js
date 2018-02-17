import React from "react";
import { connect } from "react-redux";
import Followers from "./Followers";
import { fetchUserRequest, fetchFollowersRequest } from "../actions/users";

function mapStateToProps(state) {
  const { login, avatarUrl, info } = state.users;
  const { followers } = state.followers;
  return {
    isLoaded: false,
    login: login,
    avatarUrl: avatarUrl,
    info: info,
    followers: followers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchUserRequest: (login) => {
      dispatch(fetchUserRequest(login));
    },
    dispatchFetchFollowersRequest: (login) => {
      dispatch(fetchFollowersRequest(login));
    }
  };
}

export class UserPage extends React.Component {
  componentDidMount() {
    const {
      isLoaded,
      dispatchFetchUserRequest,
      dispatchFetchFollowersRequest
    } = this.props;

    if (!isLoaded) {
      const urlLogin = this.props.location.pathname.split(/\//).pop();
      dispatchFetchUserRequest(urlLogin);
      dispatchFetchFollowersRequest(urlLogin);
    }
  }

  componentWillReceiveProps(props) {
    const {
      dispatchFetchUserRequest,
      dispatchFetchFollowersRequest
    } = this.props;

    const urlLogin = props.location.pathname.split(/\//).pop();
    dispatchFetchUserRequest(urlLogin);
    dispatchFetchFollowersRequest(urlLogin);
  }

  render() {
    console.log('1');
    const { login, avatarUrl, info, followers, isLoaded } = this.props;
    return (
      <div>
        <h1>{login}</h1>
        <img src={avatarUrl} alt="alt" />
        <p>Followers: {info.followers}</p>
        <p>Public repos: {info.publicRepos}</p>
        <Followers followers={followers} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
