import React, { Component } from "react";
import "./Market.css";
import Order from "../Order/Order";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";

import { connect } from "react-redux";
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  handleClickCreateOrder = () => {
    const order = getNewOrder();
    this.props.dispatchCreateOrder(order);
  };

  handleClickMoveOrderToFarm = () => {
    const {orders} = this.props;
    const order = orders[orders.length - 1];
    this.props.dispatchMoveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleClickCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={orders.length === 0}
          onClick={this.handleClickMoveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map((order, index) => {
            return (
              <Order key={order.id}>
                <div className="order__upper">
                  <p className="p--order">Название: {order.name}</p>
                  <p className="p--order">
                    <span className="order-price">
                      Цена: {order.price}
                    </span>
                  </p>
                </div>
                <div className="order__lower">
                  <p className="p--order">
                    <span className="order-price">
                      Создан: {order.createdAt.toTimeString()}
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
    orders: state.market.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchCreateOrder: order => {
      dispatch(createOrder(order));
    },
    dispatchMoveOrderToFarm: order => {
      dispatch(moveOrderToFarm(order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
