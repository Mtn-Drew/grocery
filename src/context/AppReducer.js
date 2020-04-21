export default (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_FROM_LIST':
      const tempArrDelete = state.groceryItem.filter(
        (item) => item.id !== action.payload
      )

      return {
        ...state,
        groceryItem: tempArrDelete,
      }
    case 'ADD_ITEM_TO_LIST':
      return {
        ...state,
        groceryItem: [action.payload, ...state.groceryItem],
      }
    case 'TOGGLE_CHECKED':
      const tempArrChecked = state.groceryItem.map((item) => {
        if (item.id === action.payload.id) {
          item.checked = !item.checked
          return item
        } else {
          return item
        }
        // console.log('id matched')
      })
      console.log('tempArrChecked ->', tempArrChecked)

      return {
        ...state,
        groceryItem: tempArrChecked,
      }
    default:
      return state
  }
}
