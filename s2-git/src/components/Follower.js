import React from "react";
import { Link } from "react-router-dom";
import "./Follower.css";

export default class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div className="follower" key={follower.login}>
        <Link to={`/user/${follower.login}`}>
          <h2>{follower.login}</h2>
        </Link>
        <img src={follower.avatar_url} alt="alt" />
      </div>
    );
  }
}
