export default function InventoryReducer(
  state = {
    activeIndex: null,
    backpack: 
    [ items.Apple,items.Potion,items.Bread,
      null,null,null,
      null,null,null ]
  },
  action
) {
  let tempInventory
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return {
        activeIndex: action.itemIndex,
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
    default:
      return state;
  }
}

let items = {
  'Apple': {
    name: 'Apple',
    type: 'item',
    image: 'apple',
    flavor: 'a ripe, juicy apple',
    effectDescription: 'heals 5 HP, 5 Hunger',
    HPUp: 5,
    HungerUp: 5,
  },
  'Potion': {
    name: 'Potion',
    type: 'item',
    image: 'potion',
    flavor: 'a potion made of red herbs',
    effectDescription: 'heals 50 HP',
    HPUp: 50,
  },
  'Bread': {
    name: 'Bread',
    type: 'item',
    image: 'bread',
    flavor: 'made of bread.',
    effectDescription: 'heals 10 HP, 20 Hunger',
    HPUp: 10,
    HungerUp: 20,
  }
}