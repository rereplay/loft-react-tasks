import React, { Component } from "react";
import "./App.css";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./Home";
import Public from "./Public";
import Auth from "./Auth";
import Private from "./Private";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/public">Публичная страница</Link>
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/public" component={Public} />
          {isAuthorized ? (
            <Route path="/private" component={Private} />
          ) : (
            <Redirect from="/private" to="/auth" />
          )}
          <Route
            path="/auth"
            render={() => {
              return (
                <Auth
                  isAuthorized={isAuthorized}
                  handleAuthorize={this.handleAuthorize}
                />
              );
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
