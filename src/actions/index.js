import * as types from '../constants/ActionTypes'

export const asyncStorageLoad = () => ({ type: types.LOAD_STORAGE })
export const loggedInPristine = () => ({ type: types.LOGGED_IN_PRISTINE })
export const logIn = (fbToken) => {
  return { type: types.LOG_IN, fbToken: fbToken }
}
export const logOut = () => ({ type: types.LOG_OUT })
