export default (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_FROM_LIST':
      return {
        ...state,
        groceryItem: state.groceryItem.filter(
          (item) => item.id !== action.payload
        ),
      }
    case 'ADD_ITEM_TO_LIST':
      return {
        ...state,
        groceryItem: [action.payload, ...state.groceryItem],
      }
    default:
      return state
  }
}
