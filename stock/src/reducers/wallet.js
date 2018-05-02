import { handleActions } from "redux-actions";
import { fetchWalletSuccess, fetchWalletFailure } from "../actions/wallet";

export const initState = {
  usd: 0,
  btc: 0,
  eth: 0
};

const wallet = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => {
      const { usd, btc, eth } = action.payload;
      return {
        ...state,
        usd: usd,
        btc: btc,
        eth: eth
      };
    },
    [fetchWalletFailure]: (state, _) => {
      return {
        ...state,
        usd: 0,
        btc: 0,
        eth: 0
      };
    }
  },
  initState
);

export default wallet;
