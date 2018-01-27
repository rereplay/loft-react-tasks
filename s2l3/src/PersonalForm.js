import React, { Component, Fragment } from "react";

class PersonalForm extends Component {
  handleChangeForm = e => {
    this.props.onChangeForm(e.target.name, e.target.value);
  };

  render() {
    return (
      <Fragment>
        <h1>Персональная информация</h1>
        <div className="personal-form">
          <input
            name="firstName"
            onChange={this.handleChangeForm}
            value={this.props.firstName}
          />
          <input
            name="lastName"
            onChange={this.handleChangeForm}
            value={this.props.lasttName}
          />
          <input
            name="email"
            onChange={this.handleChangeForm}
            value={this.props.email}
          />
        </div>
      </Fragment>
    );
  }
}

export default PersonalForm;
