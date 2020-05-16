export default function FieldsReducer(
  state = {
    event: null,
    activeField: null,
    leftField: [],
    centerField: [],
    rightField : [],
  },
  action
) {
  let tempField
  let tempState
  switch (action.type) {
    case 'TRIGGER_EVENT':
      return {
        ...state,
       event: action.event,
       activeField: action.fieldIndex,
      }
    case 'CONTINUE_EVENT':
      return {
        ...state,
        event: events[action.eventIndex],
      }
    case 'END_EVENT':
      console.log(state)
      tempState = {
        leftField: [...state.leftField],
        centerField: [...state.centerField],
        rightField: [...state.rightField],
      }
      tempState[state.activeField] = tempState[state.activeField].slice(1)
      return {
        ...state,
        leftField: tempState.leftField,
        centerField: tempState.centerField,
        rightField: tempState.rightField,
        activeField: null,
        event: null,
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

let events = {
  ItemApple1: {
    title: 'An Apple',
    image: 'apple',
    text: 'You come across an apple on the ground!',
    buttons: [
      {
        name: 'Take',
        effects: [
          ['GetItem', 'Apple'],
          ['EndEvent']
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
  ItemPotion1: {
    title: 'A Potion',
    image: 'Potion',
    text: 'You come across an Potion on the ground!',
    buttons: [
      {
        name: 'Take',
        effects: [
          ['GetItem', 'Potion'],
          ['EndEvent']
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
  ItemBread1: {
    title: 'A Bread',
    image: 'Bread',
    text: 'You come across a loaf of bread on the ground!',
    buttons: [
      {
        name: 'Take',
        effects: [
          ['GetItem', 'Bread'],
          ['EndEvent']
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
  EventTrapPitfall1_1: {
    title: 'ITS A TRAP!',
    image: 'kobold',
    text: 'As you take a step forward, you get this eerie feeling before your foot touches the ground. Do you throw yourself sideways (uses 5 energy) at the last moment, or continue the step?',
    buttons: [
      {
        name: 'Dodge',
        effects: [
          ['ContinueEvent', 'EventTrapPitfall1_2'],
        ]
      },
      {
        name: 'Step forward',
        effects: [
          ['ContinueEvent', 'EventTrapPitfall1_3'],
        ]
      },
    ]
  },
  EventTrapPitfall1_2: {
    title: 'ITS A TRAP!',
    image: 'kobold',
    text: 'Using 5 points of stamina, you throw yourself sideways. After picking yourself up, you poke at the ground you would have stepped with a stick. The earth gives way and reveals a massive hole, at least 5 feet deep. Good thing you avoided that!',
    buttons: [
      {
        name: 'Continue',
        effects: [
          ['DecreaseHunger', 5],
          ['EndEvent']
        ]
      },
    ]
  },
  EventTrapPitfall1_3: {
    title: 'ITS A TRAP!',
    image: 'kobold',
    text: 'Ignoring your instincts, you step forward anyway. What kind of idiot would take such a drastic measure for a stupid suspicion, anyway? As you step forward, the ground opens up, revealing a massive pitfall trap. After you hit the bottom, taking 10 damage, you wonder who would make such a thing in the middle of a place like this.',
    buttons: [
      {
        name: 'Continue',
        effects: [
          ['DecreaseHP', 10],
          ['EndEvent']
        ]
      },
    ]
  },
}

let fields = {
  'ItemApple1': {
    name: 'Apple',
    image: 'apple',
    flavor: 'a ripe, juicy apple',
    event: events.ItemApple1,
  },
  'ItemPotion1': {
    name: 'Potion',
    image: 'Potion',
    flavor: 'a Potion on the ground',
    event: events.ItemPotion1,
  },
  'ItemBread1': {
    name: 'Bread',
    image: 'Bread',
    flavor: 'a Bread on the ground',
    event: events.ItemBread1,
  },
  'EventTrapPitfall1_1': {
    name: 'Suspicious grass',
    image: 'kobold',
    flavor: 'somethings not quite right here...',
    event: events.EventTrapPitfall1_1,
  } 
}; 