import { handleActions } from "redux-actions";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../actions/users";

const initState = {
  avatarUrl: null,
  login: null,
  isLoaded: false,
  isError: false,
  info: {
    followers: null,
    publicRepos: null
  }
};

const users = handleActions(
  {
    [fetchUserRequest]: (state, _) => {
      return {
        ...state,
        isLoaded: false
      }
    },
    [fetchUserSuccess]: (state, action) => {
      return {
        ...state,
        isLoaded: true,
        isError: false,
        avatarUrl: action.payload.data.avatar_url,
        login: action.payload.data.login,
        info: {
          followers: action.payload.data.followers,
          publicRepos: action.payload.data.public_repos
        }
      }
    },
    [fetchUserFailure]: (state, _) => {
      return {
        ...state,
        isLoaded: true,
        isError: true
      }
    }
  },
  initState
);

export default users;
