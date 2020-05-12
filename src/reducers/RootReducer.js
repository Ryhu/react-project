import StatusReducer from './StatusReducer.js';
import InventoryReducer from './InventoryReducer.js';
import FieldsReducer from './FieldsReducer.js';
import { combineReducers } from "redux";
 
const RootReducer = combineReducers({
  status: StatusReducer,
  inventory: InventoryReducer,
  fields: FieldsReducer,
})
 
export default RootReducer;