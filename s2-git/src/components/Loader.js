import React from "react";
import "./Loader.css";

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <img className="loader" src={require("./load.png")} alt="alt" />
      </div>
    );
  }
}
