import { handleActions } from "redux-actions";
import {
  registrationSuccess,
  registrationFailure
} from "../actions/registration";
import { loginSuccess, loginFailure } from "../actions/login";
import { logout } from "../actions/logout";

export const initState = {
  token: null,
  authorized: false
};

const auth = handleActions(
  {
    [registrationSuccess]: (state, action) => {
      return {
        ...state,
        token: action.payload,
        authorized: true
      };
    },
    [registrationFailure]: (state, _) => {
      return {
        ...state,
        token: null,
        authorized: false
      };
    },
    [loginSuccess]: (state, action) => {
      return {
        ...state,
        token: action.payload,
        authorized: true
      };
    },
    [loginFailure]: (state, _) => {
      return {
        ...state,
        token: null,
        authorized: false
      };
    },
    [logout]: state => {
      return {
        ...state,
        token: null,
        authorized: false
      };
    }
  },
  initState
);

export default auth;
