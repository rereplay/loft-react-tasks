import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initialState = {
  orders: []
};

function farm(state = initialState, action) {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case MOVE_ORDER_TO_CUSTOMER:
      const orders = state.orders.filter(
        order => order.id !== action.payload.id
      );
      return {
        ...state,
        orders: orders
      };
    default:
      return state;
  }
}

export default farm;
