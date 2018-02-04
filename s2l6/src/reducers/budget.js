import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initialState = {
  profit: 0,
  sellExpanse: 0,
  deliveryExpanse: 0,
  farmExpanse: 0,
  total: 0
};

function budget(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        sellExpanse: state.sellExpanse + 20,
        total: state.total + action.payload.price - 20
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse + 100,
        total: state.total - 100
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse + 20,
        total: state.total - 20
      };
    default:
      return state;
  }
}

export default budget;
