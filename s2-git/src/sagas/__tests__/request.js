import request from "../request";
import { call, select, put } from "redux-saga/effects";
import { getIsNetworkErrorPresent } from "../../reducers/network";
import { clearNetworkErrors, networkError } from "../../actions/network";
import {logout} from '../../actions/auth';

describe("request saga", () => {
  describe('without errors', () => {
    describe('with no network error in state', () => {
      const mockHandler = () => {};
      const saga = request(mockHandler, '123');

      it('calls handler', () => {
        expect(saga.next().value).toEqual(call(mockHandler, '123'));
      });

      it('selects getIsNetworkErrorPresent', () => {
        expect(saga.next('testresponse').value).toEqual(select(getIsNetworkErrorPresent));
      });

      it('puts clearNetworkErrors', () => {
        expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
      });

      it('returns response', () => {
        const {value, done} = saga.next();
        expect(value).toEqual('testresponse');
        expect(done).toEqual(true);
      });
    })

    describe('with network error in state', () => {
      const mockHandler = () => {};
      const saga = request(mockHandler, '234');

      it('calls handler', () => {
        expect(saga.next().value).toEqual(call(mockHandler, '234'));
      });

      it('selects getIsNetworkErrorPresent', () => {
        expect(saga.next('testresponse000').value).toEqual(select(getIsNetworkErrorPresent));
      });

      it('returns response', () => {
        const {value, done} = saga.next(false);
        expect(value).toEqual('testresponse000');
        expect(done).toEqual(true);
      });
    })
  })

  describe("with errors", () => {
    describe("catches non 401 error", () => {
      const mockHandler = () => {};
      const error = {response: {status: 400}}
      const saga = request(mockHandler, "999");

      it("calls handler", () => {
        expect(saga.next().value).toEqual(call(mockHandler, "999"));
      });

      it('puts NetworkError', () => {
        expect(saga.throw(error).value).toEqual(put(networkError(error)))
      });

      it('throws error', () => {
        try {
          saga.next()
        } catch(e) {
          expect(e).toEqual(error)
          expect(saga.done).toBeTruthy
        }
      })
    });

    describe("catches 401 error", () => {
      const mockHandler = () => {};
      const error = {response: {status: 401}}
      const saga = request(mockHandler, "999");

      it("calls handler", () => {
        expect(saga.next().value).toEqual(call(mockHandler, "999"));
      });

      it('puts NetworkError', () => {
        expect(saga.throw(error).value).toEqual(put(networkError(error)))
      });

      it('puts logout', () => {
        expect(saga.next().value).toEqual(put(logout()))
      });

      it('throws error', () => {
        try {
          saga.next()
        } catch(e) {
          expect(e).toEqual(error)
        }
      })

      it('finishes', () => {
        expect(saga.next().done).toBeTruthy
      })
    });
  });
});
