import { RepositoriesTypes } from './types'


export function signInRequest(email, password) {
  return {
    type: RepositoriesTypes.REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(user) {
  return {
    type: RepositoriesTypes.SUCCESS,
    payload: user,
  };
}

export function signInFailure(msg) {
  return {
    type: RepositoriesTypes.FAILURE,
    payload: msg,
  };
}  