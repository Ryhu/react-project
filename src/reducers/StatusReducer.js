export default function StatusReducer(
    state = {
      HP: 50,
      HPMax: 200,
    },
    action
  ) {
    switch (action.type) {
      case 'INCREASE_HP':
        return {
          ...state,
          HP: state.HP + action.amount > state.HPMax ? state.HPMax : state.HP + action.amount
        }
      default:
        return state;
    }
  }