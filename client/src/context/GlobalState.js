import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//Init state
const initialState = {
  store: [],
  groceryItem: [],
  historyItem: [],
  error: null,
  groceryLoading: true,
  storeLoading: true,
  historyLoading: true,
  showModal: false,
  modal: '',
  modalName: '',
  modalDescription: '',
  modalAisle: '',
  modalStore: '',
  modalDate: '',
  modalId: '',
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
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  async function updateGroceryItem(item) {
    console.log('in updateGroceryItem-', item)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const data = {
      itemName: item.itemName,
      description: item.description,
      aisle: item.aisle,
      defaultStore: item.defaultStore,
      _id: item._id,
    }
    console.log('data beotch--> ', data)
    try {
      await axios.put(`/api/v1/groceryItems/${data._id}`, data, config)

      dispatch({
        type: 'UPDATE_GROCERY_ITEM',
        payload: item,
      })
    } catch (error) {
      dispatch({
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
        payload: error.response.data.error,
      })
    }
  }

  function toggleChecked(item) {
    console.log('in toggle-- ', item)
    dispatch({
      type: 'TOGGLE_CHECKED',
      payload: item,
    })
  }

  function toggleModal(item) {
    console.log('in toggleModal-- ', item)
    dispatch({
      type: 'TOGGLE_MODAL',
      payload: item,
    })
  }

  function setNewModalName(name) {
    dispatch({
      type: 'SET_NEW_MODAL_NAME',
      payload: name,
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
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
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
        type: 'DATA_ERROR',
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
        toggleModal,
        modal: state.modal,
        error: state.error,
        groceryLoading: state.groceryLoading,
        showModal: state.showModal,
        modalName: state.modalName,
        modalAisle: state.modalAisle,
        modalDescription: state.modalDescription,
        modalStore: state.modalStore,
        modalDate: state.modalDate,
        setNewModalName,
        updateGroceryItem,
        modalId: state.modalId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
