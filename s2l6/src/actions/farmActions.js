import { MOVE_ORDER_TO_CUSTOMER } from "./farmTypes";

export const moveOrderToCustomer = (order) => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload: order
  }
}
