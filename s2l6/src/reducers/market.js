import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initialState = {
  orders: []
};

function market(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case MOVE_ORDER_TO_FARM:
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

export default market;
