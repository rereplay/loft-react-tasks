import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleClick = e => {
    let { value, posts } = this.state;
    posts.push(value);
    this.setState({
      posts: posts,
      value: ""
    });
  };

  render() {
    let posts = this.state.posts.map((post, index) => {
      return <NewsPost post={post} key={index}/>;
    });
    return (
      <div className="App">
        <input className="todo-input" onChange={this.handleChange} value={this.state.value} />
        <button onClick={this.handleClick}>Опубликовать</button>
        {posts}
      </div>
    );
  }
}

export default App;
