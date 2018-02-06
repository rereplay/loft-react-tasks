import React from "react";
import { connect } from "react-redux";
import { showRequest, resetIsLoaded } from "../actions/showActions";

class ShowPage extends React.Component {
  componentDidMount() {
    const { dispatchShowRequest, isLoaded, match } = this.props;
    if (!isLoaded) dispatchShowRequest(match.params.id);
  }
  componentWillUnmount() {
    this.props.dispatchResetIsLoaded();
  }

  render() {
    const { isLoading, info, error } = this.props;
    console.log(info);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка</p>;
    return (
      <div>
        <h1>{info.name}</h1>
        {info.image &&
          info.image.medium && <img alt="alt" src={info.image.medium} />}
        <p dangerouslySetInnerHTML={{ __html: info.summary }} />
        {info._embedded &&
          info._embedded.cast &&
          info._embedded.cast.map((person, index) => {
            return (
              <div key={index} className="t-person t-preview">
                <p>{person.person.name}</p>
                {person.person.image &&
                  person.person.image.medium && (
                    <img alt="alt" src={person.person.image.medium} />
                  )}
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.shows.isLoading,
    isLoaded: state.shows.isLoaded,
    info: state.shows.info,
    error: state.shows.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchShowRequest: showId => {
      dispatch(showRequest({ showId: showId }));
    },
    dispatchResetIsLoaded: () => {
      dispatch(resetIsLoaded());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
