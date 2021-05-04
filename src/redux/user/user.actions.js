import userActionTypes from "./user.types";
import * as userDB from "../../database/user"
const signUpStart = () => ({
  type : userActionTypes.SIGN_UP_START,
})

const signUpSuccess = (userInfo) => ({
  type : userActionTypes.SIGN_IN_SUCCESS, 
  payload : userInfo
})

const signUpFail = (error) => ({
  type : userActionTypes.SIGN_UP_FAIL,
  payload : error
})

export const signUpUser = (name , gender, email, password) => async dispatch => {
  try {  
    dispatch(signUpStart());
    const user = await userDB.createUserWithEmailAndPassword(name, gender, email, password);
    const userResult = {...user};
    delete userResult.password;
    dispatch(signUpSuccess(userResult));
  } catch (error) {
    console.log(error)    
    dispatch(signUpFail(error.message))
  }
}

const getCurrentUserStart = () => ({
  type : userActionTypes.GET_CURRENT_USER_START
})

const getCurrentUserSuccess = (user) => ({
  type : userActionTypes.GET_CURRENT_USER_SUCCESS,
  payload : user
})

const getCurrentUserFail = (error) => ({
  type : userActionTypes.GET_CURRENT_USER_FAIL, 
  payload : error
})

export const checkUserSession = () => async dispatch => {
  try {
    dispatch(getCurrentUserStart());
    const user = await userDB.getCurrentUser();
    dispatch(getCurrentUserSuccess(user));
  } catch (error) {
    dispatch(getCurrentUserFail(error.message))
  }
}

const signOutUserStart = () => ({
  type : userActionTypes.SIGN_OUT_USER_START
})

const signOutUserSuccess = () => ({
  type : userActionTypes.SIGN_IN_SUCCESS
})

const signOutUserFail = (error) => ({
  type : userActionTypes.SIGN_OUT_USER_FAIL,
  payload:  error
})

export const signOutUser = () => async dispatch => {
  try {
    dispatch(signOutUserStart());
    await userDB.signOutUser();
    dispatch(signOutUserSuccess())
  } catch (error) {
    dispatch(signOutUserFail(error.message))
  }
}