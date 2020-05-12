import StatusReducer from './StatusReducer.js';
import { combineReducers } from "redux";
 
const RootReducer = combineReducers({
  status: StatusReducer,
})
 
export default RootReducer;