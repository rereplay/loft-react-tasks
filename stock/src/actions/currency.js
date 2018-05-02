import { createActions } from "redux-actions";

export const {
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  fetchEthSuccess,
  selectBtc,
  selectEth,
  selectOffset
} = createActions(
  "FETCH_BTC_REQUEST",
  "FETCH_ETH_REQUEST",
  "FETCH_BTC_SUCCESS",
  "FETCH_BTC_FAILURE",
  "FETCH_ETH_FAILURE",
  "FETCH_ETH_SUCCESS",
  "SELECT_BTC",
  "SELECT_ETH",
  "SELECT_OFFSET"
);
