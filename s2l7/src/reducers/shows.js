import {
  showRequest,
  showSuccess,
  showError,
  resetIsLoaded
} from "../actions/showActions";
import { handleActions } from 'redux-actions';

const initState = {
  isLoading: true,
  isLoaded: false,
  info: {},
  error: false
};

const shows = handleActions(
  {
    [showSuccess]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        info: action.payload.info,
        error: false
      };
    },
    [showError]: (state, _) => {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        info: {},
        error: true
      };
    },
    [resetIsLoaded]: (state, _) => {
      return {
        ...state,
        isLoaded: false,
        info: {}
      };
    }
  },
  initState
);

export default shows;
