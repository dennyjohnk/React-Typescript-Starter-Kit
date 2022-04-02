import React, { createContext, useContext, useReducer } from 'react';

import { AppState } from '../../types';

import { AppActions } from './actions';
import { getLocalAppStateValue } from './persist';
import Reducer from './reducer';

const initialValue = getLocalAppStateValue();

// eslint-disable-next-line @typescript-eslint/naming-convention
const AppStateContext = createContext<[AppState, React.Dispatch<AppActions>]>([initialValue, () => initialValue]);

export const AppStateStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  return <AppStateContext.Provider value={[state, dispatch]}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);

export default useAppState;
