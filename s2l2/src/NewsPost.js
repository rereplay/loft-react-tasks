import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {
  render() {
    return <p className="news-post">{this.props.text}</p>;
  }
}

export default NewsPost;
