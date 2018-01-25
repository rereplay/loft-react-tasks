import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {
  render() {
    return <div className="news-post">{this.props.post}</div>;
  }
}

export default NewsPost;
