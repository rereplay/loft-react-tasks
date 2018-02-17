import { handleActions } from "redux-actions";
import { setToken } from "../actions/auth";

const initState = {
  token: null
};

const auth = handleActions(
  {
    [setToken]: (state, action) => {
      return {
        ...state,
        token: action.payload
      };
    }
  },
  initState
);

export default auth;
