export default function SystemReducer(
  state = {
    dragItem: null,
    mode: 'town',
  },
  action
) {
  // INFO dragItem will be set to null for 99% of the time, only active when dragging an item. 
  // because of this, even thou it's an object, deep-duping dragItem is not necessary...i think.
  switch (action.type) {
    case 'SET_MODE_DUNGEON':
      return {
        ...state,
        mode: 'dungeon',
      }
    case 'SET_MODE_TOWN':
      return {
        ...state,
        mode: 'town',
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