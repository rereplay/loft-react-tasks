import { takeLatest, call, put } from "redux-saga/effects";
import { fetchUserSaga } from "../users";
import { getUserInformation, getTokenOwner } from "../../api";
import request from '../request';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../../actions/users";

describe("Users saga", () => {
  describe("when there are no errors", () => {
    describe('for random path', () => {
      const saga = fetchUserSaga({ type: "testtype", payload: "testpayload" });

      it("calls getUserInformation", () => {
        expect(saga.next().value).toEqual(
          call(request, getUserInformation, "testpayload")
        );
      });

      it("puts fetchUserSuccess", () => {
        expect(saga.next({ name: "123" }).value).toEqual(
          put(fetchUserSuccess({ name: "123" }))
        );
      });

      it("finishes", () => {
        expect(saga.next().done).toBeTruthy;
      });
    });

    describe('for "me" path', () => {
      const saga = fetchUserSaga({ type: "testtype", payload: "me" });

      it("calls getUserInformation", () => {
        expect(saga.next().value).toEqual(
          call(request, getTokenOwner, "me")
        );
      });

      it("puts fetchUserSuccess", () => {
        expect(saga.next({ name: "000" }).value).toEqual(
          put(fetchUserSuccess({ name: "000" }))
        );
      });

      it("finishes", () => {
        expect(saga.next().done).toBeTruthy;
      });
    });
  });

  describe("when there are errors", () => {
    const saga = fetchUserSaga(null);

    it("puts fetchUserFailure", () => {
      const action = saga.next().value.PUT.action;
      expect(action.type).toEqual(fetchUserFailure().type);
    });

    it("finishes", () => {
      expect(saga.next().done).toBeTruthy();
    });
  });
});
