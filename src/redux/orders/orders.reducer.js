import orderActionTypes from "./orders.types";

const INITIAL_STATE = {
  orders : [], 
  loading : false, 
  error : undefined
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
    case orderActionTypes.ADD_NEW_ORDER_START : 
      return {
        ...state, 
        loading : true, 
        error : undefined
      }
    case orderActionTypes.ADD_NEW_ORDER_SUCCESS : 
      return {
        ...state, 
        loading : false , 
        orders : state.orders.length ?  [{...action.payload}, ...state.orders] : [...state.orders],        
      }
    case orderActionTypes.ADD_NEW_ORDER_FAIL : 
      return {
        ...state, 
        loading : false,
        error : action.payload
      }
    default : return state ; 
  }
}