import { takeLatest, call, put } from "redux-saga/effects";
import { fetchFollowersSaga } from "../followers";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../../actions/users";
import request from "../request";
import { getUserFollowers } from "../../api";

describe("Followers saga", () => {
  describe("when there are no errors", () => {
    const saga = fetchFollowersSaga({
      type: "testtype",
      payload: "testpayload"
    });

    it("calls getUserFollowers", () => {
      expect(saga.next().value).toEqual(
        call(request, getUserFollowers, "testpayload")
      );
    });

    it("puts fetchFollowersSuccess", () => {
      expect(saga.next({ data: "testdata" }).value).toEqual(
        put(fetchFollowersSuccess("testdata"))
      );
    });

    it("finishes", () => {
      expect(saga.next().done).toBeTruthy();
    });
  });

  describe("when there are errors", () => {
    const saga = fetchFollowersSaga({
      type: "testtype",
      payload: "testpayload"
    });

    it("calls getUserFollowers", () => {
      expect(saga.next().value).toEqual(
        call(request, getUserFollowers, "testpayload")
      );
    });

    it("puts fetchFollowersFailure", () => {
      const action = saga.next().value.PUT.action;
      expect(action.type).toEqual(fetchFollowersFailure().type);
    });

    it("finishes", () => {
      expect(saga.next().done).toBeTruthy();
    });
  });
});
