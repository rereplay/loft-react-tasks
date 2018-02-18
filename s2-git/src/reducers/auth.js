import { handleActions } from "redux-actions";
import { authorize, logout } from "../actions/auth";

export const getIsAuthorized = () => {
  return false;
}

const initState = {
  token: null
};

const auth = handleActions(
  {
    [authorize]: (state, action) => {
      return {
        ...state,
        token: action.payload
      };
    },
    [logout]: (state, _) => {
      return {
        ...state,
        token: null
      }
    }
  },
  initState
);

export default auth;
