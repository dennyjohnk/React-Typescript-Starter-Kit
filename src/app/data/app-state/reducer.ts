import { AppState } from '../../types';

import { AppActions, SET_USER_ID, SET_USER_TOKEN } from './actions';
import { persistAppStateToLocalStorage } from './persist';

const Reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case SET_USER_ID: {
      persistAppStateToLocalStorage('userId', action.payload);

      return {
        ...state,
        userId: action.payload,
      };
    }

    case SET_USER_TOKEN: {
      persistAppStateToLocalStorage('token', action.payload);

      return {
        ...state,
        token: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
