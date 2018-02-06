import {
  searchRequest,
  searchSuccess,
  searchError
} from "../actions/searchActions";
import { search } from "../api";

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload.query)
    .then(matches => store.dispatch(searchSuccess({ matches: matches })))
    .catch(error => store.dispatch(searchError()))
  }
  return next(action);
};

export default searchMiddleware;
