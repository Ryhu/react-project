export default function SystemReducer(
  state = {
    event: false,
    dragItem: null
  },
  action
) {
  switch (action.type) {
    case 'TRIGGER_EVENT':
      return {
        ...state,
       event: true
      }
    case 'END_EVENT':
      return {
        ...state,
        event: false
      }
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