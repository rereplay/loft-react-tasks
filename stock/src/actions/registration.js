import { createActions } from "redux-actions";

export const {
  registrationRequest,
  registrationSuccess,
  registrationFailure
} = createActions(
  "REGISTRATION_REQUEST",
  "REGISTRATION_SUCCESS",
  "REGISTRATION_FAILURE"
);
