import { legacy_createStore as createStore, combineReducers } from "redux";
import calculatorReducer from "./Reducer";
const rootReducer = combineReducers({
  calculator: calculatorReducer,
});
const store = createStore(rootReducer);
export default store;
