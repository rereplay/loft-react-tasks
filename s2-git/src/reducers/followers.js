import { handleActions } from "redux-actions";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/users";

const initState = {
  followers: [],
  isLoaded: false,
  isError: false
};

const followers = handleActions(
  {
    [fetchFollowersRequest]: (state, _) => {
      return {
        ...state,
        isLoaded: false
      }
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
