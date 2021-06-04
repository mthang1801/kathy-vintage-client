import productActionTypes from "./products.types";

const INITIAL_STATE = {
  bestSellProducts : [],
  loading : true,
  error : undefined,
  fetched : false
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case productActionTypes.FETCH_BEST_SELL_PRODUCTS_START : 
      return {
        ...state, 
        loading : true,
        error : undefined
      };
    case productActionTypes.FETCH_BEST_SELL_PRODUCTS_SUCCESS : 
      return {
        ...state, 
        loading : false , 
        bestSellProducts : action.payload,
        fetched : true
      }
    default : return state; 
  }
}

export default productsReducer