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
      rooms: {
        'The Bramble': {
          fields: {

          }
        },
        'Heart of the Forest': {
          fields: {
            
          }
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
  switch (action.type) {
    case 'ENTER_DUNGEON': 
      let dungeon = dungeons[action.location]
      // amount-card ammount per pile, 
      tempState = {}
      tempField = []
      console.log(dungeons)
      console.log(action.location)
      console.log(fields)
      let roomFields = dungeon.rooms[dungeon.entrance].fields
      let fieldIndxes = ['leftField', 'centerField', 'rightField']
      fieldIndxes.forEach(fieldIndex => {
        for(let i = 0;i<5;i++){
          tempField.push(fields[roomFields[Math.floor(Math.random() * Object.keys(roomFields).length)]])
        }
        tempState[fieldIndex] = [...tempField]
        tempField = []
      })
      tempState[fieldIndxes[Math.floor(Math.random() * fieldIndxes.length)]].push(fields.ExitForest)
      return {
        ...state,
        leftField: [...tempState.leftField],
        centerField: [...tempState.centerField],
        rightField : [...tempState.rightField],
        dungeon: dungeons[action.location],
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