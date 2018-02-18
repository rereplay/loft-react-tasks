import reducer, { initState } from "../users";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../../actions/users";

describe("users reducer", () => {
  it("returns initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("handles fetchUserRequest action", () => {
    expect(reducer(initState, fetchUserRequest())).toEqual(initState);
  });

  it("handles fetchUserSuccess action", () => {
    const actionStub = fetchUserSuccess({
      data: {
        avatar_url: "testavatar",
        login: "testlogin",
        info: { followers: 10000, publicRepos: 10001 }
      }
    });
    expect(reducer(initState, actionStub)).toEqual({
      ...initState,
      isLoaded: true,
      isError: false,
      avatarUrl: actionStub.payload.data.avatar_url,
        login: actionStub.payload.data.login,
        info: {
          followers: actionStub.payload.data.followers,
          publicRepos: actionStub.payload.data.public_repos
        }
    });
  });

  it("handles fetchUserFailure action", () => {
    expect(reducer(initState, fetchUserFailure())).toEqual({
      ...initState,
      isLoaded: true,
      isError: true
    });
  });
});
