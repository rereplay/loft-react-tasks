import React from "react";
import { connect } from "react-redux";
import { selectBtc, selectEth } from "../actions/currency";

function mapStateToProps(state) {
  return {
    usdForBtc: state.currency.usdForBtc,
    usdForEth: state.currency.usdForEth,
    offset: state.currency.offset
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSwitchToBtc: offset => dispatch(selectBtc(offset)),
    dispatchSwitchToEth: offset => dispatch(selectEth(offset))
  };
}

export class Header extends React.Component {
  switchToBtc = () => {
    const { dispatchSwitchToBtc, offset } = this.props;
    this.props.dispatchSwitchToBtc(offset)
  }

  switchToEth = () => {
    const { dispatchSwitchToEth, offset } = this.props;
    this.props.dispatchSwitchToEth(offset)
  }

  render() {
    const { usdForBtc, usdForEth } = this.props;
    return (
      <div>
        <span
          name="btc"
          onClick={this.switchToBtc}
        >{`${usdForBtc} USD / 1 BTC`}</span>
        <span> {" <|> "} </span>
        <span
          name="eth"
          onClick={this.switchToEth}
        >{`${usdForEth} USD / 1 ETH`}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
