import { actionTypes } from './actions'

const initialState = {
  username: ''
}

const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default sessionReducer
