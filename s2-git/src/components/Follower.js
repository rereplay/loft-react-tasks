import React from "react";
import { Link } from "react-router-dom";
import "./Follower.css";

export default class Follower extends React.Component {
  render() {
    const { login, avatar_url } = this.props.follower;
    return (
      <div className="follower">
        <Link to={`/user/${login}`}>
          <h2>{login}</h2>
        </Link>
        <img src={avatar_url} alt="alt" />
      </div>
    );
  }
}
