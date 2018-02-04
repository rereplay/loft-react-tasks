import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order/Order";
import { moveOrderToCustomer } from "../../actions/farmActions";
import "./Farm.css";

export class Farm extends Component {
  handleClickMoveOrderToCustomer = () => {
    const {orders} = this.props;
    const order = orders[orders.length - 1];
    this.props.dispatchMoveOrderToCustomer(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={orders.length === 0}
          onClick={this.handleClickMoveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        <div>
          {orders.map((order, index) => {
            return (
              <Order key={order.id}>
                <div className="order__upper">
                  <p className="p--order">Название: {order.name}</p>
                  <p className="p--order">
                    Цена:
                    <span className="order-price">{order.price}</span>
                  </p>
                </div>
                <div className="order__lower">
                  <p className="p--order">
                    Создан:
                    <span className="order-price">
                      {order.createdAt.toString()}
                    </span>
                  </p>
                </div>
              </Order>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.farm.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchMoveOrderToCustomer: order => {
      dispatch(moveOrderToCustomer(order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
