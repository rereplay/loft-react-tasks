import React from "react";
import { connect } from "react-redux";
import Follower from "./Follower";
import Loader from "./Loader";
import { fetchFollowersRequest } from "../actions/users";

function mapStateToProps(state) {
  const { followers, isLoaded, isError } = state.followers;
  return {
    followers: followers,
    isLoaded: isLoaded,
    isError: isError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchFollowersRequest: login => {
      dispatch(fetchFollowersRequest(login));
    }
  };
}

export class Followers extends React.Component {
  componentDidMount() {
    const { dispatchFetchFollowersRequest, login } = this.props;
    dispatchFetchFollowersRequest(login);
  }

  componentWillReceiveProps(newProps) {
    const { dispatchFetchFollowersRequest, login } = newProps;
    if (this.props.login !== newProps.login) {
      dispatchFetchFollowersRequest(login);
    }
  }

  render() {
    const { followers, isLoaded, isError } = this.props;
    if (!isLoaded) return <Loader />;
    if (isError) return <p>Ошибка</p>;
    return (
      <div>
        {this.props.followers.map(follower => {
          return <Follower key={follower.login} follower={follower} />;
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
