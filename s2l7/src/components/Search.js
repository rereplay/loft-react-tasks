import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchRequest } from "../actions/searchActions";

class Search extends Component {
  state = {
    value: ""
  };

  handleOnChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    this.props.dispatchSearchRequest(this.state.value);
  };

  render() {
    const { isLoading, matches, error } = this.props;

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка</p>;
    return (
      <div>
        <div className="t-search-inputs">
          <input
            placeholder="Название сериала"
            onChange={this.handleOnChange}
            value={this.state.value}
          />
          <button onClick={this.handleClick}>Найти</button>
        </div>
        <div className="t-search-result">
          {matches.map(match => {
            return (
              <div className="t-preview" key={match.id}>
                <div className="upper">
                  <div>
                    <Link className="t-link" to={`/shows/${match.id}`}>
                      {match.name}
                    </Link>
                  </div>
                  {match.image &&
                    match.image.medium && (
                      <img alt="alt" src={match.image.medium} />
                    )}
                </div>
                <div className="lower">
                  <p dangerouslySetInnerHTML={{ __html: match.summary }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    matches: state.search.matches,
    isLoading: state.search.isLoading,
    error: state.search.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchSearchRequest: query => {
      dispatch(searchRequest({ query: query }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
