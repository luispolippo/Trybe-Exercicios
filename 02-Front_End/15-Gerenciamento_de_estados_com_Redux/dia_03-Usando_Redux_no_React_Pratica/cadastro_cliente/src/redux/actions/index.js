export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SAVE_CLIENT = 'SAVE_CLIENT';

export const saveLoginAction = (payload) => ({
  type: SAVE_LOGIN,
  payload
})

export const saveClientAction = (payload) => ({
  type: SAVE_CLIENT,
  payload
})
