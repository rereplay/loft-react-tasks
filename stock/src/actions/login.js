import { createActions } from "redux-actions";

export const { loginRequest, loginSuccess, loginFailure } = createActions(
  "LOGIN_REQUEST",
  "LOGIN_SUCCESS",
  "LOGIN_FAILURE"
);
