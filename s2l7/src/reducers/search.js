import {
  searchRequest,
  searchSuccess,
  searchError
} from "../actions/searchActions";

const initState = {
  matches: [],
  isLoading: false,
  error: false
};

export const search = (state = initState, action) => {
  switch (action.type) {
    case searchRequest.toString():
      return {
        ...state,
        isLoading: true
      };
    case searchSuccess.toString():
      return {
        ...state,
        matches: action.payload.matches,
        isLoading: false,
        error: false
      };
    case searchError.toString():
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default search;
