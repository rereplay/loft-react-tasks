import reducer, { initState } from "../followers";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../../actions/users";

describe("followers reducer", () => {
  it("returns initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it("handles fetchFollowersRequest action", () => {
    expect(reducer(initState, fetchFollowersRequest())).toEqual(initState);
  });

  it("handles fetchFollowersSuccess action", () => {
    const actionStub = fetchFollowersSuccess([1, 2, 3]);
    expect(reducer(initState, actionStub)).toEqual({
      ...initState,
      followers: [1, 2, 3],
      isLoaded: true,
      isError: false
    });
  });

  it("handles fetchFollowersFailure action", () => {
    expect(reducer(initState, fetchFollowersFailure())).toEqual({
      ...initState,
      isLoaded: true,
      isError: true
    });
  });
});
