import { handleActions } from "redux-actions";
import {
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  fetchEthSuccess,
  selectOffset,
  selectBtc,
  selectEth
} from "../actions/currency";

const initState = {
  usdForBtc: 0,
  usdForEth: 0,
  btc: {
    sells: [],
    purchases: []
  },
  eth: {
    sells: [],
    purchases: []
  },
  offset: "2h",
  currentCurrency: 'btc'
};

const currency = handleActions(
  {
    [fetchBtcSuccess]: (state, action) => {
      return {
        ...state,
        usdForBtc: action.payload[0].sell,
        btc: {
          sells: action.payload.map((candle) => [candle.mts, candle.sell]),
          purchases: action.payload.map((candle) => [candle.mts, candle.purchase])
        }
      };
    },
    [fetchEthSuccess]: (state, action) => {
      return {
        ...state,
        usdForEth: action.payload[0].sell,
        eth: {
          sells: action.payload.map((candle) => [candle.mts, candle.sell]),
          purchases: action.payload.map((candle) => [candle.mts, candle.purchase])
        }
      };
    },
    [selectOffset]: (state, action) => {
      return {
        ...state,
        offset: action.payload
      }
    },
    [selectBtc]: (state, _) => {
      return {
        ...state,
        currentCurrency: 'btc'
      }
    },
    [selectEth]: (state, _) => {
      return {
        ...state,
        currentCurrency: 'eth'
      }
    }
  },
  initState
);

export default currency;
export const getOffset = (state) => state.currency.offset;
