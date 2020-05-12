export default function FieldsReducer(
  state = {
    leftField: [fields.ItemApple1],
    centerField: [fields.ItemPotion1],
    rightField : [fields.ItemBread1],
  },
  action
) {
  let tempField
  switch (action.type) {
    // case 'DELETE_FIELD':
    //   tempField = [...state.backpack]
      
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
}

let fields = {
  'ItemApple1': {
    name: 'Apple',
    type: 'item',
    image: 'apple',
    flavor: 'a ripe, juicy apple',
    effectDescription: 'heals 10 HP',
    recoverAmount: 10,
  },
  'ItemPotion1': {
    name: 'Potion',
    type: 'item',
    image: 'potion',
    flavor: 'a potion made of red herbs',
    effectDescription: 'heals 50 HP',
    recoverAmount: 50,
  },
  'ItemBread1': {
    name: 'Bread',
    type: 'item',
    image: 'bread',
    flavor: 'made of bread.',
    effectDescription: 'heals 20 HP',
    recoverAmount: 20,
  }
}