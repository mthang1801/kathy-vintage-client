import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/user.reducer";
// const rootPersistConfig = {
//   key: "root",
//   storage,
//   whiteList: ["cart"],
//   blackList : ["user"]
// }

const rootReducer = combineReducers({
  user : userReducer
})

export default rootReducer
