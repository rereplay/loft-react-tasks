import { authFlow } from "../auth";
import { authorize, logout } from "../../actions/auth";
import { select, call, put, take } from "redux-saga/effects";
import { getIsAuthorized } from "../../reducers/auth";
import { setTokenApi, clearTokenApi } from "../../api";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from "../../localStorage";

describe("auth saga", () => {
  describe("when not authorized", () => {
    describe("without token in local storage", () => {
      const saga = authFlow();

      it("selects getIsAuthorized", () => {
        expect(saga.next().value).toEqual(select(getIsAuthorized));
      });

      it("calls getTokenFromLocalStorage", () => {
        expect(saga.next(false).value).toEqual(call(getTokenFromLocalStorage));
      });

      it("takes authorize action", () => {
        expect(saga.next().value).toEqual(take(authorize));
      });

      it("calls setTokenApi", () => {
        expect(saga.next(authorize("testtoken")).value).toEqual(
          call(setTokenApi, "testtoken")
        );
      });

      it("calls setTokenToLocalStorage", () => {
        expect(saga.next().value).toEqual(
          call(setTokenToLocalStorage, "testtoken")
        );
      });

      it("takes logout", () => {
        expect(saga.next().value).toEqual(take(logout));
      });

      it("calls removeTokenFromLocalStorage", () => {
        expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
      });

      it("calls clearTokenApi", () => {
        expect(saga.next().value).toEqual(call(clearTokenApi));
      });
    });

    describe("with token in local storage", () => {
      const saga = authFlow();

      it("selects getIsAuthorized", () => {
        expect(saga.next().value).toEqual(select(getIsAuthorized));
      });

      it("calls getTokenFromLocalStorage", () => {
        expect(saga.next(false).value).toEqual(call(getTokenFromLocalStorage));
      });

      it("puts authorize action", () => {
        expect(saga.next("testtoken123").value).toEqual(
          put(authorize("testtoken123"))
        );
      });

      it("calls setTokenApi", () => {
        expect(saga.next().value).toEqual(call(setTokenApi, "testtoken123"));
      });

      it("calls setTokenToLocalStorage", () => {
        expect(saga.next().value).toEqual(
          call(setTokenToLocalStorage, "testtoken123")
        );
      });

      it("takes logout", () => {
        expect(saga.next().value).toEqual(
          take(logout)
        );
      });

      it("calls removeTokenFromLocalStorage", () => {
        expect(saga.next().value).toEqual(
          call(removeTokenFromLocalStorage)
        );
      });

      it("calls clearTokenApi", () => {
        expect(saga.next().value).toEqual(
          call(clearTokenApi)
        );
      });
    });
  });

  describe("when authorized", () => {
    const saga = authFlow();

    it("selects getIsAuthorized", () => {
      expect(saga.next().value).toEqual(select(getIsAuthorized));
    });

    it("calls getTokenFromLocalStorage", () => {
      expect(saga.next(true).value).toEqual(call(getTokenFromLocalStorage));
    });

    it("calls setTokenApi", () => {
      expect(saga.next().value).toEqual(
        call(setTokenApi, undefined)
      );
    });

    it("calls setTokenToLocalStorage", () => {
      expect(saga.next().value).toEqual(
        call(setTokenToLocalStorage, undefined)
      );
    });

    it("takes logout", () => {
      expect(saga.next().value).toEqual(
        take(logout)
      );
    });

    it("calls removeTokenFromLocalStorage", () => {
      expect(saga.next().value).toEqual(
        call(removeTokenFromLocalStorage)
      );
    });

    it("calls clearTokenApi", () => {
      expect(saga.next().value).toEqual(
        call(clearTokenApi)
      );
    });
  });
});
