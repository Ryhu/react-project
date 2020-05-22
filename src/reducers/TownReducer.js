export default function TownReducer(
  state = {
    activeLocation: 'townSquare',
    town: towns.yorne,
  },
  action
) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        activeLocation: action.location
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
      supply: ['Apple', 'Bread', 'Potion', 'Rock'],
      demand: [],
    },
    exits: ['Yornewood'],
    villagers:[],
    quests: [],
  }
}