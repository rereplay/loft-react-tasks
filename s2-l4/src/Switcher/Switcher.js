import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChild: 0
    };
  }

  handleChangeChild = event => {
    this.setState({ selectedChild: event.target.getAttribute("data-id") });
  };

  render() {
    const children = React.Children.toArray(this.props.children);
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {children.map((child, index) => {
              return (
                <li
                  key={index}
                  data-id={index}
                  className="component-list__name"
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName || child.type.name}
                </li>
              );
            })}
          </ul>
          <hr />
        </nav>
        <div className="component-wrapper">
          {children[this.state.selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
