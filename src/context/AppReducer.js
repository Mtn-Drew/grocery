export default (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_FROM_LIST':
      console.log('in delete')
      const copyArr = state.groceryItem.filter(
        (item) => item.id !== action.payload
      )
      console.log(copyArr)
      return {
        ...state,
        groceryItem: copyArr,
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
