import { combineReducers } from "redux";
import auth from './auth';
import wallet from './wallet';
import currency from './currency';

export default combineReducers({
  auth,
  wallet,
  currency
});
