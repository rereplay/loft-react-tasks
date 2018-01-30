import React, { Component } from "react";

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(props.cardNumber)
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ number: this.format(props.cardNumber) });
  }

  handleOnChange = event => {
    this.props.onChange(this.normalize(event.target.value));
  };

  normalize = formattedNumber => {
    return formattedNumber.replace(/ +/g, "");
  };

  format = rawNumber => {
    return !rawNumber || rawNumber === ""
      ? ""
      : rawNumber
          .toString()
          .match(/.{1,4}/g)
          .join(" ");
  };

  render() {
    return <input onChange={this.handleOnChange} value={this.state.number} />;
  }
}

export default CardNumberInput;
