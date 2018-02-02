import React from "react";
import PropTypes from "prop-types";

class Private extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <p>Private page</p>;
  }
}

export default Private;
