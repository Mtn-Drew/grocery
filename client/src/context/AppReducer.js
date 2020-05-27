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
      const modal = (
        <div className={`modalBackground modalShowing-${!state.showModal}`}>
          {console.log('showMOdal is --', state.showModal)}
          <form onSubmit={() => {}} className="modalInner">
            <div className="form-control">
              <label htmlFor="text">Grocery Item</label>
              <input
                type="text"
                placeholder="grocery item name"
                value={action.payload.itemName}
                // onChange={(e) => setNewItemName(e.target.value)}
                // required
                readOnly
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="description"
                // value={newItemDescription}
                // onChange={(e) => setNewItemDescription(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="aisle"
                value={action.payload.aisle}
                // onChange={(e) => setNewItemAisle(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="store"
                value={action.payload.defaultStore}
                // onChange={(e) => setNewItemStore(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="date last purchased"
                // value={newItemLastPurchased}
                readOnly
              />
            </div>

            <button className="btn">Update</button>
          </form>
        </div>
      )
      const flip = !state.showModal
      return {
        ...state,
        showModal: flip,
        modal: modal,
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
