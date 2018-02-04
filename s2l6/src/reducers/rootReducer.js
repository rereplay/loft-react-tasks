import { combineReducers } from "redux";
import market from './market';
import farm from './farm';
import budget from './budget';

const rootReducer = combineReducers({
  market,
  farm,
  budget
});

export default rootReducer;
