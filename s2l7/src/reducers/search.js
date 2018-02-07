import {
  searchRequest,
  searchSuccess,
  searchError
} from "../actions/searchActions";
import { handleActions } from 'redux-actions';

const initState = {
  matches: [],
  isLoading: false,
  error: false
};

const search = handleActions(
  {
    [searchRequest]: (state, _) => {
      return { ...state, isLoading: true };
    },
    [searchSuccess]: (state, action) => {
      return {
        ...state,
        matches: action.payload.matches,
        isLoading: false,
        error: false
      };
    },
    [searchError]: (state, _) => {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
  },
  initState
);

export default search;
