import { createAction } from 'redux-actions';

export const showRequest = createAction('SHOW_REQUEST');
export const showSuccess = createAction('SHOW_SUCCESS');
export const showError = createAction('SHOW_ERROR');
export const resetIsLoaded = createAction('RESET_IS_LOADED');
