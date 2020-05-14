export default (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_FROM_LIST':
      const tempArrDelete = state.groceryItem.filter(
        (item) => item._id !== action.payload
      )
      return {
        ...state,
        groceryItem: tempArrDelete,
      }

    case 'ADD_ITEM_TO_LIST':
      console.log('in add item -', action.payload)
      return {
        ...state,
        groceryItem: [...state.groceryItem, action.payload],
      }

    case 'TOGGLE_CHECKED':
      const tempArrChecked = state.groceryItem.map((item) => {
        if (item._id === action.payload._id) {
          item.checked = !item.checked
          return item
        } else {
          return item
        }
      })
      return {
        ...state,
        groceryItem: tempArrChecked,
      }

    case 'GET_GROCERIES':
      return {
        ...state,
        loading: false,
        groceryItem: action.payload,
      }

    //transactions
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
