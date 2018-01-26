import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = e => {
    this.setState({
      newsInput: e.target.value
    });
  };

  handleNewPost = e => {
    let { news, newsInput } = this.state;
    news.push({text: newsInput});
    this.setState({
      news: news,
      newsInput: ""
    });
  };

  render() {
    let news = this.state.news.map((post, index) => {
      return <NewsPost text={post.text} key={index} />;
    });
    return (
      <div className="App">
        <input
          className="todo-input"
          onChange={this.handleChange}
          value={this.state.newsInput}
        />
        <button onClick={this.handleNewPost}>Опубликовать</button>
        {news}
      </div>
    );
  }
}

export default App;
