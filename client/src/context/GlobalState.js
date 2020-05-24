import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//alt store is set if user picks store other than default

//Init state
const initialState = {
  store: [],
  groceryItem: [],
  historyItem: [],
  // transactions: [],
  error: null,
  groceryLoading: true,
  storeLoading: true,
  historyLoading: true,
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions

  async function getGroceryItems() {
    try {
      const res = await axios.get('/api/v1/groceryItems')

      dispatch({
        type: 'GET_GROCERIES',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function deleteItemFromList(id) {
    try {
      await axios.delete(`/api/v1/groceryItems/${id}`)

      dispatch({
        type: 'DELETE_ITEM_FROM_LIST',
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function addItemToList(item) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/v1/groceryItems', item, config)

      dispatch({
        type: 'ADD_ITEM_TO_LIST',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  function toggleChecked(item) {
    dispatch({
      type: 'TOGGLE_CHECKED',
      payload: item,
    })
  }

  async function getStores() {
    try {
      const res = await axios.get('/api/v1/groceryStores')

      dispatch({
        type: 'GET_STORES',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function deleteStore(id) {
    try {
      await axios.delete(`/api/v1/groceryStores/${id}`)

      dispatch({
        type: 'DELETE_STORE',
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function addStore(item) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/v1/groceryStores', item, config)

      dispatch({
        type: 'ADD_STORE',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function getHistoryItems() {
    try {
      const res = await axios.get('/api/v1/historyItems')

      dispatch({
        type: 'GET_HISTORY',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function deleteItemFromHistory(id) {
    try {
      await axios.delete(`/api/v1/historyItems/${id}`)

      dispatch({
        type: 'DELETE_HISTORY_ITEM_FROM_LIST',
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function addItemToHistory(item) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/v1/historyItems', item, config)

      dispatch({
        type: 'ADD_ITEM_TO_HISTORY',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        store: state.store,
        groceryItem: state.groceryItem,
        deleteItemFromList,
        addItemToList,
        toggleChecked,
        getGroceryItems,
        getStores,
        deleteStore,
        addStore,
        historyItem: state.historyItem,
        getHistoryItems,
        addItemToHistory,
        deleteItemFromHistory,
        // transactions: state.transactions,
        error: state.error,
        groceryLoading: state.groceryLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
