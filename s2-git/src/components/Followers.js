import React from "react";
import { Link } from "react-router-dom";

export default class Followers extends React.Component {
  render() {
    return (
      <div>
        {this.props.followers.map(follower => {
          return (
            <div key={follower.login}>
              <Link to={`/user/${follower.login}`}>
                <h2>{follower.login}</h2>
              </Link>
              <img src={follower.avatar_url} alt="alt" />
            </div>
          );
        })}
      </div>
    );
  }
}
