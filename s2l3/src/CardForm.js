import React, { Component, Fragment } from "react";

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = e => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };

  render() {
    return (
      <Fragment>
        <h1>Номер карты</h1>
        <div className="card-form">
          <input
            name="cardNumber"
            onChange={this.handleChangeForm}
            value={this.props.cardNumber}
          />
        </div>
      </Fragment>
    );
  }
}

export default CardForm;
