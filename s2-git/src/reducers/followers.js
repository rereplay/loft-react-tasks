import { handleActions } from "redux-actions";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/users";

export const initState = {
  followers: [],
  isLoaded: false,
  isError: false
};

const followers = handleActions(
  {
    [fetchFollowersRequest]: (_state, _) => {
      return initState;
    },
    [fetchFollowersSuccess]: (state, action) => {
      return {
        ...state,
        followers: action.payload,
        isLoaded: true,
        isError: false
      };
    },
    [fetchFollowersFailure]: (state, _) => {
      return {
        ...state,
        isLoaded: true,
        isError: true
      };
    }
  },
  initState
);

export default followers;
