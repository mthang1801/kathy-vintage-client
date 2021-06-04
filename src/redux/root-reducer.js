import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import ordersReducer from "./orders/orders.reducer";
import productsReducer from "./products/products.reducer";
const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],  
}

const rootReducer = combineReducers({
  user : userReducer,
  cart : cartReducer,
  orders : ordersReducer,
  products : productsReducer
})

export default persistReducer(rootPersistConfig, rootReducer);
