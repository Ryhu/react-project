export default function InventoryReducer(
  state = {
    activeIndex: 0,
    backpack: 
    [ item1,item2,item3,
      null,null,null,
      null,null,null ]
  },
  action
) {
  let tempInventory
  switch (action.type) {
    case 'DELETE_ITEM':
      tempInventory = [...state.backpack]
      tempInventory[action.index - 1] = null
      return {
        ...state,
        backpack: tempInventory
      }
    default:
      return state;
  }
}


let item1 = {
  name: 'Apple',
  type: 'item',
  image: 'apple',
  flavor: 'a ripe, juicy apple',
  effectDescription: 'heals 10 HP',
  recoverAmount: 10,
}
let item2 = {
  name: 'Potion',
  type: 'item',
  image: 'potion',
  flavor: 'a potion made of red herbs',
  effectDescription: 'heals 50 HP',
  recoverAmount: 50,
}
let item3 = {
  name: 'Bread',
  type: 'item',
  image: 'bread',
  flavor: 'made of bread.',
  effectDescription: 'heals 20 HP',
  recoverAmount: 20,
}