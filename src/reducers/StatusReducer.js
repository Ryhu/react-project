export default function StatusReducer(
  state = {
    HP: 50,
    HPMax: 200,
    Hunger: 10,
    HungerMax: 100,
    Coins: 100,
  },
  action
) {
  switch (action.type) {
    case 'INCREASE_COINS':
      return {
        ...state,
        Coins: state.Coins + action.amount 
      }
    case 'DECREASE_COINS':
      return {
        ...state,
        Coins: state.Coins - action.amount 
      }
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
    case 'DECREASE_HUNGER':
      return state.Hunger - action.amount > 0
        ? {
          ...state,
          Hunger: state.Hunger - action.amount,
        }
        : {
          ...state,
          HP: state.HP + state.Hunger - action.amount,
          Hunger: 0,
        }
    default:
      return state;
  }
}