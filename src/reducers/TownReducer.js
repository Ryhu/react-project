export default function TownReducer(
  state = {
    yorne: {

    }
  },
  action
) {
  switch (action.type) {
    case 'DRAG_START':
      return {
        ...state,
        dragItem: action.item
      }
    case 'DRAG_END':
      return {
        ...state,
        dragItem: null
      }
    default:
      return state;
  }
}

let towns = {
  yorne: {
    name: 'Yorne',
    backgroundImage: '',
    shop: {
      supply: ['apple'],
      demand: [],
    },
    exits: [],
    villagers:[],
    quests: [],
  }
}