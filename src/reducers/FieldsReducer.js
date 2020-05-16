export default function FieldsReducer(
  state = {
    event: null,
    leftField: [fields.ItemApple1, fields.ItemPotion1],
    centerField: [fields.ItemPotion1, fields.ItemApple1],
    rightField : [fields.ItemBread1, fields.ItemPotion1],
  },
  action
) {
  let tempField
  let tempState
  switch (action.type) {
    case 'TRIGGER_EVENT':
      return {
        ...state,
       event: action.event
      }
    case 'END_EVENT':
      return {
        ...state,
        event: null
      }
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
    image: 'apple',
    flavor: 'a ripe, juicy apple',
    event: {
      title: 'An Apple',
      image: 'apple',
      text: 'You come across an apple on the ground!',
      buttons: [
        {
          name: 'Take',
          effects: [
            ['GetItem', 'apple']
          ]
        },
        {
          name: 'Discard',
          effects: [
            ['EndEvent']
          ]
        },
      ]
    },
  },
  // 'EventTrap1': {
  //   name: 'Suspicious grass',
  //   type: 'event',
  //   image: '',
  //   flavor: 'somethings not quite right',
  //   event: {
  //     text: 'You come across an apple on the ground!',
  //     buttons: ['Take', 'Discard'],
  //     effects: [['getItem', 'Apple'], ['end']],
  //   },
  // },
  // 'ItemPotion1': {
  //   name: 'Potion',
  //   type: 'item',
  //   image: 'potion',
  //   flavor: 'a potion made of red herbs',
  //   effectDescription: 'heals 50 HP',
  //   recoverAmount: 50,
  //   itemIndex: 'Potion',
  // },
  // 'ItemBread1': {
  //   name: 'Bread',
  //   type: 'item',
  //   image: 'bread',
  //   flavor: 'made of bread.',
  //   effectDescription: 'heals 20 HP',
  //   recoverAmount: 20,
  //   itemIndex: 'Bread',
  // }
}