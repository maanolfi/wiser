import { RepositoriesTypes, RepositoriesState } from './types'
import { Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

const INITIAL_STATE: RepositoriesState = {
    data: {
        token: null,
        email: null,
        msg: {
            error: null,
        },
    }
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case RepositoriesTypes.SUCCESS:
            return {
                ...state, data: {
                    token: action.payload.token,
                    email: action.payload.email,
                    msg: {
                        error: null
                    }
                }
            }

        case RepositoriesTypes.FAILURE:
            return {
                ...state, data: {
                    ...state.data,
                    msg: {
                        error: action.payload
                    }
                }
            }
        default:
            return state
    }
}

export default reducer
