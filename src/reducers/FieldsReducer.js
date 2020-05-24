import fields from '../data/fields'
import events from '../data/events'
import dungeons from '../data/dungeons'

// WIP: THE GREAT RENAMING:
// merge dungeon reducer with fieldsReducer, named dungeonreducer
// move events to system, events apply to dungeons and towns

export default function FieldsReducer(
  state = {
    event: null,
    activeField: null,
    leftField: [],
    centerField: [],
    rightField : [],
    dungeon: {
      name: 'Yornewood',
      type: 'passage',
      entrance: 'Yorne',
      entranceRoom: 'The Bramble',
      exit: 'Jerne',
      exitRoom: 'The Bramble',
      backgroundImage: './forest_background.jpg',
      rooms: {
        'The Bramble': {
          fields: [
            'ItemApple1', 'ItemBread1', 'ItemPotion1', 'EventTrapPitfall1_1'
          ],
          entrance: null,
          exit: 'Heart of the Forest',
          exits: [
            { event: 'ExitForest', fieldIndex: 'centerField' },
          ]
        },
        'Heart of the Forest': {
          fields: [
            'ItemBread1', 'ItemPotion1'
          ],
          entrance: 'The Bramble',
          exit: null,
          exits: [
            { event: 'ExitForest', fieldIndex: 'centerField' },
          ]
        },
        'The Thinning of Trees': {
          fields: {
            
          }
        }
      },
      exits: ['Yorne'],
    }
  },
  action
) {
  let tempField
  let tempState
  const fieldIndexes = ['leftField', 'centerField', 'rightField']
  switch (action.type) {
    case 'ENTER_DUNGEON': 
      let dungeon = dungeons[action.dungeonIndex]
      // amount-card ammount per pile, 
      tempState = {}
      tempField = []
      let roomFields = dungeon.entrance === action.townIndex ? dungeon.rooms[dungeon.entranceRoom].fields : dungeon.rooms[dungeon.exitRoom].fields 
      fieldIndexes.forEach(fieldIndex => {
        for(let i = 0;i<5;i++){
          tempField.push(fields[roomFields[Math.floor(Math.random() * Object.keys(roomFields).length)]])
        }
        tempState[fieldIndex] = [...tempField]
        tempField = []
      })
      tempState[fieldIndexes[Math.floor(Math.random() * fieldIndexes.length)]].push(fields.ExitForest)
      return {
        ...state,
        leftField: [...tempState.leftField],
        centerField: [...tempState.centerField],
        rightField : [...tempState.rightField],
        dungeon: dungeons[action.dungeonIndex],
      }
    case 'CHANGE_ROOM':
      return {
        ...state,
        event: action.event,
        activeField: action.fieldIndex,
      }
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
      fieldIndexes.forEach(fieldIndex => {
        for(let i = 0;i<action.amount;i++){
          tempField.push(fields[Object.keys(fields)[Math.floor(Math.random() * Object.keys(fields).length)]])
        }
        tempState[fieldIndex] = [...tempField]
        tempField = []
      })
      tempState[fieldIndexes[Math.floor(Math.random() * fieldIndexes.length)]].push(fields.ExitForest)

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

let changeRoom = (locationIndex) => ({
  title: 'An Exit!',
  image: 'Exit',
  text: 'The forest clears up, revealing an opening in the trees and a weathered road leading out of the forest.',
  buttons: [
    {
      name: 'Continue',
      effects: [
        ['SetModeTown'],
        ['EndEvent'],
      ]
    },
  ]
});