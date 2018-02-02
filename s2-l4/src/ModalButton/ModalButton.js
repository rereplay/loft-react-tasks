import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import "./ModalButton.css";

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShow: false
    };
  }

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {this.state.isModalShow &&
          ReactDOM.createPortal(
            [<Modal onClick={this.hideModal} />],
            document.getElementById("portal")
          )}
      </div>
    );
  }
}

export default ModalButton;
