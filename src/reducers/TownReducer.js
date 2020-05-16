export default function TownReducer(
  state = {
    dragItem: null
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