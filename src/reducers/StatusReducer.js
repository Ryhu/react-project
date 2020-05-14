export default function StatusReducer(
  state = {
    HP: 50,
    HPMax: 200,
    Hunger: 10,
    HungerMax: 100,
    Coins: 10,
    Event: false,
  },
  action
) {
  switch (action.type) {
    case 'INCREASE_HP':
      return {
        ...state,
        HP: state.HP + action.amount > state.HPMax ? state.HPMax : state.HP + action.amount
      }
    case 'DECREASE_HP':
      return {
        ...state,
        HP: state.HP - action.amount 
      }
    case 'INCREASE_HUNGER':
      return {
        ...state,
        Hunger: state.Hunger + action.amount > state.HungerMax ? state.HungerMax : state.Hunger + action.amount
      }
    default:
      return state;
  }
}