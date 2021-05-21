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
    case userActionTypes.SIGN_IN_WITH_SOCIAL_NETWORK_START:
    case userActionTypes.UPDATE_USER_INFORMATION_START:
      return { ...state, loading: true, error: undefined }
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_IN_WITH_SOCIAL_NETWORK_SUCCESS:
    case userActionTypes.GET_CURRENT_USER_SUCCESS:
      return { ...state, user: action.payload, fetched: true, loading: false }
    case userActionTypes.SIGN_OUT_USER_SUCCESS:
      return { ...state, user: null, loading: false }
    case userActionTypes.CLEAR_USER_ERROR:
      return { ...state, error: undefined }
    case userActionTypes.UPDATE_USER_PAYMENT_AND_SHIPPING_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          information: { ...state.user.information, ...action.payload },
        },
      }
    case userActionTypes.UPDATE_USER_INFORMATION_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case userActionTypes.CLEAR_ERROR:
      return { ...state, error: undefined }
    case userActionTypes.SIGN_UP_FAIL:
    case userActionTypes.GET_CURRENT_USER_FAIL:
    case userActionTypes.SIGN_OUT_USER_FAIL:
    case userActionTypes.SIGN_IN_FAIL:
    case userActionTypes.SIGN_IN_WITH_SOCIAL_NETWORK_FAIL:
    case userActionTypes.UPDATE_USER_INFORMATION_FAIL:
    case userActionTypes.UPDATE_USER_PAYMENT_AND_SHIPPING_TYPE_FAIL:
      return { ...state, user: null, loading: false, error: action.payload }
    default:
      return state
  }
}
