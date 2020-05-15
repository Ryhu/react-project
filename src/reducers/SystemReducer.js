export default function SystemReducer(
  state = {
    event: null,
    dragItem: null
  },
  action
) {
  switch (action.type) {
    case 'TRIGGER_EVENT':
      return {
        ...state,
       event: action.event
      }
    case 'END_EVENT':
      return {
        ...state,
        event: null
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