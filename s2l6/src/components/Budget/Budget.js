import React, { Component } from "react";
import { connect } from "react-redux";
import "./Budget.css";

export class Budget extends Component {
  checkNegate = (value) => {
    return value > 0 ? (-value) : value 
  }

  render() {
    const { profit, sellers, farm, delivery, total } = this.props;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>
          Всего получено денег: <span className="t-profit">{profit}</span>
        </p>
        <p>
          Расходы продавцов: <span className="t-sellers">{this.checkNegate(sellers)}</span>
        </p>
        <p>
          Расходы на ферме: <span className="t-farm">{this.checkNegate(farm)}</span>
        </p>
        <p>
          Расходы на доставку: <span className="t-delivery">{this.checkNegate(delivery)}</span>
        </p>
        <p>
          Итого: <span className="t-total">{total}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profit: state.budget.profit,
    sellers: state.budget.sellExpanse,
    delivery: state.budget.deliveryExpanse,
    farm: state.budget.farmExpanse,
    total: state.budget.total
  };
};

export default connect(mapStateToProps, {})(Budget);
