import { fork } from "redux-saga/effects";
import registration from "./registration";
import login from "./login";
import { fetchWalletWatch, fetchBtcWatch, fetchEthWatch, currencyWatch } from "./currency";

export default function*() {
  yield fork(registration);
  yield fork(login);
  yield fork(fetchWalletWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(currencyWatch);
}
