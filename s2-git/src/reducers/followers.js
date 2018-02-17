import { handleActions } from "redux-actions";
import { fetchFollowersSuccess } from "../actions/users";

const initState = {
  followers: []
};

const followers = handleActions(
  {
    [fetchFollowersSuccess]: (state, action) => {
      return {
        ...state,
        followers: action.payload
      };
    }
  },
  initState
);

export default followers;
