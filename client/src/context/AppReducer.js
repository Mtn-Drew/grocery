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
        groceryLoading: false,
        groceryItem: action.payload,
      }

    case 'GET_STORES':
      return {
        ...state,
        store: action.payload,
        storeLoading: false,
      }

    case 'ADD_STORE':
      console.log('in add store -', action.payload)
      return {
        ...state,
        store: [...state.store, action.payload],
      }

    case 'DELETE_STORE':
      const storeArrDelete = state.store.filter(
        (item) => item._id !== action.payload
      )
      return {
        ...state,
        store: storeArrDelete,
      }

    //transactions
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        groceryLoading: false,
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
