export const actionTypes = {
    REQUEST: '@auth/AUTH_REQUEST',
    SUCCESS: '@auth/AUTH_SUCCESS',
    FAILURE: '@auth/AUTH_FAILURE',   
}

export function signInRequest(email, password) {  
    return {
      type: actionTypes.REQUEST,
      payload: { email, password },
    };
  }
  
  export function signInSuccess(user) {
    return {
      type: actionTypes.SUCCESS,
      payload: user,
    };
  }
  
  export function signInFailure(msg) {    
    return {
      type: actionTypes.FAILURE,
      payload: msg,
    };
  }  