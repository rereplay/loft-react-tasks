import React from "react";
import { connect } from "react-redux";
import Followers from "./Followers";
import Loader from "./Loader";
import { fetchUserRequest } from "../actions/users";
import "./User.css";

function mapStateToProps(state) {
  const { login, avatarUrl, info, isLoaded, isError } = state.users;
  return {
    isLoaded: isLoaded,
    isError: isError,
    login: login,
    avatarUrl: avatarUrl,
    info: info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchUserRequest: login => {
      dispatch(fetchUserRequest(login));
    }
  };
}

export class UserPage extends React.Component {
  componentDidMount() {
    const { isLoaded, dispatchFetchUserRequest } = this.props;
    if (!isLoaded) {
      const urlLogin = this.props.location.pathname.split(/\//).pop();
      dispatchFetchUserRequest(urlLogin);
    }
  }

  componentWillReceiveProps(newProps) {
    const { dispatchFetchUserRequest } = this.props;
    const urlLogin = newProps.location.pathname.split(/\//).pop();
    if (this.props.match.url !== newProps.match.url) {
      dispatchFetchUserRequest(urlLogin);
    }
  }

  render() {
    const { login, avatarUrl, info, isLoaded, isError } = this.props;
    if (!isLoaded) return <Loader />;
    if (isError) return <p>Ошибка</p>;
    return (
      <div className="user">
        <div className="user__info">
          <div className="user__info-image">
            <img src={avatarUrl} alt="alt" />
          </div>
          <div className="user__info-text">
            <h1>{login}</h1>
            <p>Followers: {info.followers}</p>
            <p>Public repos: {info.publicRepos}</p>
          </div>
        </div>
        <Followers login={login} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
