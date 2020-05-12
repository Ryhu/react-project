import StatusReducer from './StatusReducer.js';
import InventoryReducer from './InventoryReducer.js';
import { combineReducers } from "redux";
 
const RootReducer = combineReducers({
  status: StatusReducer,
  inventory: InventoryReducer,
})
 
export default RootReducer;