import userActionTypes from "./user.types"

const INITIAL_STATE = {
  user: null,
  fetched: false,
  loading: false,
  error: undefined,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_START:
    case userActionTypes.GET_CURRENT_USER_START:
    case userActionTypes.SIGN_OUT_USER_START:
    case userActionTypes.SIGN_IN_START:
      return { ...state, loading: true, error: undefined }
    case userActionTypes.SIGN_IN_SUCCESS:    
    case userActionTypes.GET_CURRENT_USER_SUCCESS:
      return { ...state, user: action.payload, fetched: true, loading: false }
    case userActionTypes.SIGN_OUT_USER_SUCCESS:
      return { ...state, user: null, loading: false }
    case userActionTypes.SIGN_UP_FAIL:
    case userActionTypes.GET_CURRENT_USER_FAIL:
    case userActionTypes.SIGN_OUT_USER_FAIL:
    case userActionTypes.SIGN_IN_FAIL: 
      return { ...state, error: action.payload }
    default:
      return state
  }
}
