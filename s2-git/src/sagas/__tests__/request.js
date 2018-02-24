import request from '../request';
import {call, select, put} from 'redux-saga/effects';
import {getIsNetworkErrorPresent} from '../../reducers/network';
import {clearNetworkErrors, networkError} from '../../actions/network';

describe('request saga', () => {
  describe('without errors', () => {
    describe('with no network error in state', () => {
      const mockHandler = (x) => { return x };
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
      const mockHandler = (x) => { return x };
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

  // describe('with errors', () => {
  //   const saga = request(() => Promise.reject('error'));

  //   it('catches error', () => {
  //     try {
  //       saga.next()
  //     } catch(e) {
  //       console.log(e)
  //     }
  //   })
  // })
})
