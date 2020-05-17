import fields from '../data/fields'
import events from '../data/events'

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