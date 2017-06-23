import { LOGGED_IN_PRISTINE, LOG_IN, LOG_OUT } from '../constants/ActionTypes'
import { AsyncStorage } from 'react-native';

const initialState = {
  loggedIn: undefined,
  fbToken: '',
};

export default function auth(state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case LOGGED_IN_PRISTINE:
      return { ...state, loggedIn: false, fbToken: '' }
    case LOG_IN:
      return { ...state, loggedIn: true, fbToken: action.fbToken }
    case LOG_OUT:
      return { ...state, loggedIn: false, fbToken: '' }
    default:
      return state
  }
}
