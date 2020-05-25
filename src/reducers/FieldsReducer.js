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
    prevRoom: null,
    leftField: [],
    centerField: [],
    rightField : [],
    dungeon: dungeons.Yorne
  },
  action
) {
  let tempField
  let tempState
  let tempFieldIndexes
  let roomFields
  const fieldIndexes = ['leftField', 'centerField', 'rightField']
  switch (action.type) {
    case 'ENTER_DUNGEON': 
      let dungeon = dungeons[action.dungeonIndex]
      tempState = {}
      tempField = []
      roomFields =  dungeon.rooms[dungeon.entrances[action.townIndex]].fields 

      // fills each of the 3 fields with field cards
      fieldIndexes.forEach(fieldIndex => {
        for(let i = 0; i<1; i++){
          tempField.push(fields[roomFields[Math.floor(Math.random() * Object.keys(roomFields).length)]])
        }
        tempState[fieldIndex] = [...tempField]
        tempField = []
      })

      // shuffles possible exit spots, inserts exits in exit spots
      tempFieldIndexes = ['leftField', 'centerField', 'rightField']
      for(let i = tempFieldIndexes.length-1; i>0; i--){
        const randomIndex = Math.floor(Math.random() * i)
        const temp = tempFieldIndexes[i]
        tempFieldIndexes[i] = tempFieldIndexes[randomIndex]
        tempFieldIndexes[randomIndex] = temp
      }
      dungeon.rooms[dungeon.entrances[action.townIndex]].exits.forEach(exit => {
        if(exit !== null){
          tempState[tempFieldIndexes.pop()].push(exitField(exit))
        }
      })

      // tempState[fieldIndexes[Math.floor(Math.random() * fieldIndexes.length)]].push(fields.ExitForest)
      return {
        ...state,
        prevRoom: dungeon.entrances[action.townIndex],
        leftField: [...tempState.leftField],
        centerField: [...tempState.centerField],
        rightField : [...tempState.rightField],
        dungeon: dungeons[action.dungeonIndex],
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
    case 'CHANGE_ROOM':
      // roomIndex
      tempState = {}
      tempField = []
      roomFields = state.dungeon.rooms[action.roomIndex].fields 

      // fills each of the 3 fields with field cards
      fieldIndexes.forEach(fieldIndex => {
        for(let i = 0; i<1; i++){
          tempField.push(fields[roomFields[Math.floor(Math.random() * Object.keys(roomFields).length)]])
        }
        tempState[fieldIndex] = [...tempField]
        tempField = []
      })

      // shuffles possible exit spots, inserts exits in exit spots
      tempFieldIndexes = ['leftField', 'centerField', 'rightField']
      for(let i = tempFieldIndexes.length-1; i>0; i--){
        const randomIndex = Math.floor(Math.random() * i)
        const temp = tempFieldIndexes[i]
        tempFieldIndexes[i] = tempFieldIndexes[randomIndex]
        tempFieldIndexes[randomIndex] = temp
      }

      state.dungeon.rooms[action.roomIndex].exits.forEach(exit => {
        if(exit === null){
          tempState[tempFieldIndexes.pop()].push(exitField('byebye'))
        } else if(exit !== state.prevRoom){
          tempState[tempFieldIndexes.pop()].push(exitField('byebye'))
        }
      })

      return {
        ...state,
        leftField: [...tempState.leftField],
        centerField: [...tempState.centerField],
        rightField : [...tempState.rightField],
        prevRoom: action.roomIndex,
      }
    default:
      return state;
  }
}

let exitField = (roomIndex) => ({
  name: 'An Exit',
  image: 'exit',
  flavor: 'Exit to ' + roomIndex,
  event: {
    title: 'Exit',
    image: 'Exit',
    text: 'You leave the current area',
    buttons: [
      {
        name: 'Continue',
        effects: [
          ['ChangeRoom', roomIndex],
          ['EndEvent'],
        ]
      },
    ]
  }
})





// LOGIC:
// A dungeon has multiple rooms
// a dungeon is comprised of multiple rooms, and a dungeon can be straight path, or have branching paths.
// a dungeon with multiple exits is called a passage
// passages are dungeons that link towns together, and are how you travel the world
// a challenge is a dungeon with a single instance
// you enter and leave a challenge through the same entrance
// challenges usually have a big boss at the end, and are akin to more classical dungeons
// ^^^ naming tbd ^^^
// because passages have multiple exits/entrances, they have to be reversed when comming from "the other direction"
// because of this, rooms are linked to each other, and have multiple enterances/exits.