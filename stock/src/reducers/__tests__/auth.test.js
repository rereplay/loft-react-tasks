import reducer, { initState } from "../auth";

import {
  registrationSuccess,
  registrationFailure
} from "../../actions/registration";
import { loginSuccess, loginFailure } from "../../actions/login";
import { logout } from "../../actions/logout";

describe("auth reducer", () => {
  it("assigns initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("handles registrationSuccess", () => {
    expect(reducer(initState, registrationSuccess("test1"))).toEqual({
      authorized: true,
      token: "test1"
    });
  });

  it("handles registrationFailure", () => {
    expect(reducer(initState, registrationFailure())).toEqual({
      authorized: false,
      token: null
    });
  });

  it("handles loginSuccess", () => {
    expect(reducer(initState, loginSuccess("test2"))).toEqual({
      authorized: true,
      token: "test2"
    });
  });

  it("handles loginFailure", () => {
    expect(reducer(initState, loginFailure())).toEqual({
      authorized: false,
      token: null
    });
  });

  it('handles logout', () => {
    expect(reducer(initState, logout())).toEqual({
      authorized: false,
      token: null
    })
  })
});
