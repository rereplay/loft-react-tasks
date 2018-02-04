import React from 'react';
import './Order.css';

export default class Order extends React.Component {
  render() {
    const {key, children} = this.props;

    return (
      <div key={key} className="order">{children}</div>
    );
  }
}
