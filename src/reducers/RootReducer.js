import StatusReducer from './StatusReducer.js';
import InventoryReducer from './InventoryReducer.js';
import FieldsReducer from './FieldsReducer.js';
import SystemReducer from './SystemReducer.js';
import TownReducer from './TownReducer.js';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  inventory: InventoryReducer,
  fields: FieldsReducer,
  status: StatusReducer,
  system: SystemReducer,
  town: TownReducer,
})
 
export default RootReducer;