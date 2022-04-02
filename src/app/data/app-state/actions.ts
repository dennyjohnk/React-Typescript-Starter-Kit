export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';

type SetUserId = {
  type: typeof SET_USER_ID;
  payload: string;
};
export const setUserIdAction = (payload: string): SetUserId => ({
  type: SET_USER_ID,
  payload,
});

type SetUserToken = {
  type: typeof SET_USER_TOKEN;
  payload: string;
};
export const setUserTokenAction = (payload: string): SetUserToken => ({
  type: SET_USER_TOKEN,
  payload,
});

export type AppActions = SetUserId | SetUserToken;
