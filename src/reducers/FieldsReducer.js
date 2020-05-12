export default function FieldsReducer(
  state = {
    leftField: [fields.ItemApple1, fields.ItemPotion1],
    centerField: [fields.ItemPotion1, fields.ItemApple1],
    rightField : [fields.ItemBread1, fields.ItemPotion1],
  },
  action
) {
  let tempField
  let tempState
  switch (action.type) {
    case 'DELETE_FIELD':
      tempState = {
        leftField: [...state.leftField],
        centerField: [...state.centerField],
        rightField: [...state.rightField],
      }
      tempState[action.fieldIndex] = tempState[action.fieldIndex].slice(1)
      return {
        leftField: tempState.leftField,
        centerField: tempState.centerField,
        rightField: tempState.rightField,
      }
    case 'RANDOMIZED_SETUP':
      // amount-card ammount per pile, 
      tempState = {}
      tempField = []
      let fieldIndexes = ['leftField', 'centerField', 'rightField']
      fieldIndexes.forEach(fieldIndex => {
        for(let i = 0;i<action.amount;i++){
          tempField.push(fields[Object.keys(fields)[Math.floor(Math.random() * Object.keys(fields).length)]])
        }
        tempState[fieldIndex] = [...tempField]
        tempField = []
      })
      return {
        ...state,
        leftField: [...tempState.leftField],
        centerField: [...tempState.centerField],
        rightField : [...tempState.rightField],
      }
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
    itemIndex: 'Apple',
  },
  'ItemPotion1': {
    name: 'Potion',
    type: 'item',
    image: 'potion',
    flavor: 'a potion made of red herbs',
    effectDescription: 'heals 50 HP',
    recoverAmount: 50,
    itemIndex: 'Potion',
  },
  'ItemBread1': {
    name: 'Bread',
    type: 'item',
    image: 'bread',
    flavor: 'made of bread.',
    effectDescription: 'heals 20 HP',
    recoverAmount: 20,
    itemIndex: 'Bread',
  }
}