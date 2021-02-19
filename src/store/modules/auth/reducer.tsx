import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'
import produce from 'immer'

const INITIAL_STATE = {
    token: null,
    email: null,
    msg: {
        error: null,        
    },
  };

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case actionTypes.SUCCESS:
        return produce(state, draft => {
            draft.token = action.payload.token;
            draft.email = action.payload.email;
            draft.msg = {
                error: null                
            };
        });
        case actionTypes.FAILURE:
        return produce(state, draft => {
            draft.msg.error = action.payload
        });        

        default:
            return state
    }
}

export default auth
