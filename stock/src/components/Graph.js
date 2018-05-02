import React from "react";
import { connect } from "react-redux";
import { selectOffset } from "../actions/currency";
import { LineChart } from "react-easy-chart";
import moment from 'moment'

function mapStateToProps(state) {
  const {currentCurrency} = state.currency;
  return {
    sells: state.currency[currentCurrency].sells,
    purchases: state.currency[currentCurrency].purchases
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSelectOffset: offset => dispatch(selectOffset(offset))
  };
}

export class Graph extends React.Component {
  set2h = () => {
    this.props.dispatchSelectOffset("2h");
  };
  set4h = () => {
    this.props.dispatchSelectOffset("4h");
  };
  set8h = () => {
    this.props.dispatchSelectOffset("8h");
  };
  set1d = () => {
    this.props.dispatchSelectOffset("1d");
  };
  set7d = () => {
    this.props.dispatchSelectOffset("7d");
  };
  render() {
    const {sells, purchases} = this.props;
    return (
      <div>
        <span onClick={this.set2h}>2ч</span>
        <span onClick={this.set4h}>4ч</span>
        <span onClick={this.set8h}>8ч</span>
        <span onClick={this.set1d}>1д</span>
        <span onClick={this.set7d}>7д</span>
        <LineChart
          lineColors={["blue", "red"]}
          axes
          grid
          verticalGrid
          interpolate={"cardinal"}
          xType={"time"}
          datePattern={"%d-%m %H:%M"}
          width={750}
          height={400}
          style={{
            ".axis path": {
              stroke: "#EDF0F1"
            }
          }}
          data={[
            sells.map(([date, value]) => ({
              x: moment(date).format("DD-MM HH:mm"),
              y: value
            })),
            purchases.map(([date, value]) => ({
              x: moment(date).format("DD-MM HH:mm"),
              y: value
            }))
          ]}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
