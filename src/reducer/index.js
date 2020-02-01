import { combineReducers } from "redux";
import { loadReducer } from "./loadReducer";

const rootReducer = combineReducers({
  productData: loadReducer
});

export default rootReducer;
