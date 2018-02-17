import { handleActions } from "redux-actions";
import { fetchUserSuccess } from "../actions/users";

const initState = {
  avatarUrl: null,
  login: null,
  info: {
    followers: null,
    publicRepos: null
  }
};

const users = handleActions(
  {
    [fetchUserSuccess]: (state, action) => {
      return {
        ...state,
        avatarUrl: action.payload.data.avatar_url,
        login: action.payload.data.login,
        info: {
          followers: action.payload.data.followers,
          publicRepos: action.payload.data.public_repos
        }
      }
    }
  },
  initState
);

export default users;
