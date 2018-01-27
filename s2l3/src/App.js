import React, { Component } from "react";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";
import Step from "./Step";
import "./App.css";
import "./PersonalForm.css";
import "./CardForm.css";
import "./Title.css";
import "./Step.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      cardNumber: ""
    };
  }

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };

  handleTabClick = step => {
    this.setState({ step: step });
  };

  handleChangeForm = (key, val) => {
    let newState = this.state;
    newState[key] = val;
    this.setState(newState);
  };

  isFormCommitable = () => {
    let { step, firstName, lastName, email, cardNumber } = this.state;
    return (
      (step === 1 &&
        [firstName, lastName, email].every(s => s !== "") &&
        email.includes("@")) ||
      (step === 2 && cardNumber.length === 16)
    );
  };

  renderForm = () => {
    let { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 3) {
      return "Поздравляем!";
    }
  };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          <Step
            number={1}
            title="Personal information"
            onClick={this.handleTabClick}
            isClickable={this.state.step !== 1}
            isSelected={this.state.step === 1}
          />
          <Step
            number={2}
            title="Card information"
            onClick={this.handleTabClick}
            isClickable={this.state.step !== 2}
            isSelected={this.state.step === 2}
          />
          <Step
            number={3}
            title="Finish"
            onClick={this.handleTabClick}
            isClickable={this.state.step !== 3}
            isSelected={this.state.step === 3}
          />
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.isFormCommitable()}
            onClick={this.handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
