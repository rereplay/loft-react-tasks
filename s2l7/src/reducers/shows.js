import {
  showRequest,
  showSuccess,
  showError,
  resetIsLoaded
} from "../actions/showActions";

const initState = {
  isLoading: true,
  isLoaded: false,
  info: {},
  error: false
};

export const shows = (state = initState, action) => {
  switch (action.type) {
    case showSuccess.toString():
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        info: action.payload.info,
        error: false
      };
    case showError.toString():
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        info: {},
        error: true
      };
    case resetIsLoaded.toString():
      return {
        ...state,
        isLoaded: false,
        info: {}
      };
    default:
      return state;
  }
};

export default shows;
