import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const {usd, btc, eth} = state.wallet;
  return {
    usd: usd, btc: btc, eth: eth
  };
}

export class Wallet extends React.Component {
  render() {
    const {usd, btc, eth} = this.props;
    return (
      <div>
        <div>USD: {usd}</div>
        <div>BTC: {btc}</div>
        <div>ETH: {eth}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Wallet)
