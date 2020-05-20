import items from '../data/items'

export default function InventoryReducer(
  state = {
    activeIndex: null,
    backpack: 
    [ items.Apple,items.Potion,items.Bread,
      items.Rock,null,null,
      null,null,null,

      items.Apple,items.Potion,items.Bread,
      items.Rock,null,null,
      null,null,null ]
  },
  action
) {
  let tempInventory
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return {
        activeIndex: action.inventoryIndex,
        backpack: [...state.backpack]
      }
    case 'REMOVE_ACTIVE_ITEM':
      return {
        activeIndex: null,
        backpack: [...state.backpack]
      }
    case 'DELETE_ITEM':
      tempInventory = [...state.backpack]
      tempInventory[action.index - 1] = null
      return {
        ...state,
        backpack: tempInventory
      }
    case 'GET_ITEM':
      tempInventory = [...state.backpack]
      tempInventory[tempInventory.indexOf(null)] = items[action.itemIndex]
      return {
        ...state,
        backpack: tempInventory
      }
    case 'SWAP_ITEMS':
      tempInventory = [...state.backpack]
      let tempValue = tempInventory[action.inventoryIndex1]
      tempInventory[action.inventoryIndex1] = tempInventory[action.inventoryIndex2]
      tempInventory[action.inventoryIndex2] = tempValue
      return {
        ...state,
        backpack: tempInventory
      }
    default:
      return state;
  }
}
