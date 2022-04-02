import { LOCAL_STORAGE_APP_STATE_KEY, LOCAL_STORAGE_FLUSH_KEY } from '../../config/config';
import { AppState } from '../../types';

const init = () => {
  const flushKey = localStorage.getItem(LOCAL_STORAGE_FLUSH_KEY);
  if (flushKey !== LOCAL_STORAGE_FLUSH_KEY) {
    localStorage.clear();
    localStorage.setItem(LOCAL_STORAGE_FLUSH_KEY, LOCAL_STORAGE_FLUSH_KEY);
  }

  // clear localstorage if flush key mismatches
  if (localStorage.getItem(LOCAL_STORAGE_FLUSH_KEY) !== LOCAL_STORAGE_FLUSH_KEY) {
    localStorage.clear();
    localStorage.setItem(LOCAL_STORAGE_FLUSH_KEY, LOCAL_STORAGE_FLUSH_KEY);
  }
};

init();

export const getLocalAppStateValue = (): AppState => {
  const persistedValue = localStorage.getItem(LOCAL_STORAGE_APP_STATE_KEY);
  const initialValue: Omit<AppState, 'conversionAmounts' | 'orderBookStatus'> = persistedValue
    ? JSON.parse(persistedValue)
    : {
        userId: '',
        token: '',
        phone_number: '',
        accountBenefitsShown: false,
      };
  localStorage.setItem(LOCAL_STORAGE_APP_STATE_KEY, JSON.stringify(initialValue));

  return {
    ...initialValue,
  };
};

export const persistAppStateToLocalStorage = <K extends keyof AppState>(key: K, value: AppState[K]) => {
  const state = {
    ...getLocalAppStateValue(),
    [key]: value,
  };
  localStorage.setItem(LOCAL_STORAGE_APP_STATE_KEY, JSON.stringify(state));
};
