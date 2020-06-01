import React from 'react'

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

    case 'UPDATE_GROCERY_ITEM':
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

    case 'TOGGLE_MODAL':
      
      const flip = !state.showModal
      console.log('reducer- action.payload -', action.payload)
      return {
        ...state,
        showModal: flip,
        modalName: action.payload.itemName,
        modalDescription:action.payload.description,
        modalAisle: action.payload.aisle,
        modalStore: action.payload.defaultStore,
        // modalDate: action.payload.lastPurchased
        
      }

      case 'SET_NEW_MODAL_NAME':
        console.log('set new mod name - ', action.payload)

      return{
        modalName: action.payload
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

    case 'GET_HISTORY':
      return {
        ...state,
        historyItem: action.payload,
        historyLoading: false,
      }

    case 'DELETE_HISTORY_ITEM_FROM_LIST':
      const historyArrDelete = state.historyItem.filter(
        (item) => item._id !== action.payload
      )
      return {
        ...state,
        historyItem: historyArrDelete,
      }

    case 'ADD_ITEM_TO_HISTORY':
      return {
        ...state,
        historyItem: [...state.historyItem, action.payload],
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
