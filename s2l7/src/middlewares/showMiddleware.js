import {
  showRequest,
  showSuccess,
  showError
} from "../actions/showActions";
import { show } from "../api";

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload.showId)
    .then(info => store.dispatch(showSuccess({ info: info })))
    .catch(error => store.dispatch(showError()))
  }
  return next(action);
};

export default showMiddleware;
