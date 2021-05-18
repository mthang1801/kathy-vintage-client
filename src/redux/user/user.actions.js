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

 const signInStart = () => ({
  type : userActionTypes.SIGN_IN_START
})

 const signInSuccess = (user) => ({
  type : userActionTypes.SIGN_IN_SUCCESS,
  payload: user
})

 const signInFail = (error) => ({
  type : userActionTypes.SIGN_IN_FAIL,
  payload : error
})

export const signIn = (email, password) => async dispatch => {
  try {    
    dispatch(signInStart());
    const user = await userDB.signInUser(email, password);
    console.log(user)
    dispatch(signInSuccess(user));
  } catch (error) {
    dispatch(signInFail(error.message));
  }
}

const signInWithSocialNetworkStart = () => ({
  type : userActionTypes.SIGN_IN_WITH_SOCIAL_NETWORK_START
})
const signInWithSocialNetworkSuccess = (user) => ({
  type : userActionTypes.SIGN_IN_WITH_SOCIAL_NETWORK_SUCCESS,
  payload: user
})
const signInWithSocialNetworkFail = (error) => ({
  type : userActionTypes.SIGN_IN_WITH_SOCIAL_NETWORK_FAIL,
  payload : error
})

export const signInWithGoogle = () => async dispatch => {
  try {
    dispatch(signInWithSocialNetworkStart());    
    const user = await userDB.signInWithGoogle();
    dispatch(signInWithSocialNetworkSuccess(user));
  } catch (error) {
    dispatch(signInWithSocialNetworkFail(error.message))
  }
}

export const signInWithFacebook = () => async dispatch => {
  try {
    dispatch(signInWithSocialNetworkStart());    
    const user = await userDB.signInWithFacebook();
    dispatch(signInWithSocialNetworkSuccess(user));
  } catch (error) {
    dispatch(signInWithSocialNetworkFail(error.message))
  }
}

export const clearUserError = () => ({
  type : userActionTypes.CLEAR_USER_ERROR
})

export const restoreAccount = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      await userDB.restoreAccount(email);    
      resolve(true) ; 
    } catch (error) {
      reject(error.message)
    }
  })
 
}

const updateUserInformationStart = () => ({
  type : userActionTypes.UPDATE_USER_INFORMATION_START
})

const updateUserInformationSuccess = (updatedUser) => ({
  type : userActionTypes.UPDATE_USER_INFORMATION_SUCCESS, 
  payload : updatedUser
})

const updateUserInformationFail = (error) => ({
  type : userActionTypes.UPDATE_USER_INFORMATION_FAIL, 
  payload : error
})

export const updateUserInformation = (information) => dispatch => {
  return new Promise(async (resolve, reject ) => {
    try {
      dispatch(updateUserInformationStart());
      const updatedUser = await userDB.updateUserInformation(information);
      dispatch(updateUserInformationSuccess(updatedUser));
      resolve(true);
    } catch (error) {
      dispatch(updateUserInformationFail(error.message));
      reject(error.message)
    }
  })
  
}