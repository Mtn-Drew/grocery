import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//alt store is set if user picks store other than default

//Init state
const initialState = {
  store: [
    {
      storeName: 'HARMONS',
      description: '',
      location: '',
      id: 1,
    },
    {
      storeName: 'COSTCO',
      description: '',
      location: '',
      id: 2,
    },
    {
      storeName: 'WINCO',
      description: '',
      location: '',
      id: 3,
    },
    {
      storeName: 'ANY/OTHER',
      description: '',
      location: '',
      id: 4,
    },
  ],
  groceryItem: [
    // {
    //   itemName: 'eggs',
    //   description: 'chicken embryo',
    //   aisle: 'eggs',
    //   defaultStore: 'COSTCO',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 1,
    //   checked: false,
    // },
    // {
    //   itemName: 'meat',
    //   description: 'flesh of animals',
    //   aisle: 'meat',
    //   defaultStore: 'COSTCO',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 2,
    //   checked: false,
    // },
    // {
    //   itemName: 'half -n- half',
    //   description: 'coffee condiment',
    //   aisle: 'dairy',
    //   defaultStore: 'WINCO',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 3,
    //   checked: false,
    // },
    // {
    //   itemName: 'brussel sprouts',
    //   description: 'little lettuce cabbage heads',
    //   aisle: 'produce',
    //   defaultStore: 'HARMONS',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 4,
    //   checked: false,
    // },
    // {
    //   itemName: 'cat food',
    //   description: 'feline sustenance',
    //   aisle: 'pet',
    //   defaultStore: 'WINCO',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 5,
    //   checked: false,
    // },
    // {
    //   itemName: 'broccoli',
    //   description: 'little lettuce cabbage heads',
    //   aisle: 'produce',
    //   defaultStore: 'HARMONS',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 6,
    //   checked: false,
    // },
    // {
    //   itemName: 'craft beer',
    //   description: 'little lettuce cabbage heads',
    //   aisle: 'beer',
    //   defaultStore: 'HARMONS',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 7,
    //   checked: false,
    // },
    // {
    //   itemName: 'apples',
    //   description: 'little lettuce cabbage heads',
    //   aisle: 'produce',
    //   defaultStore: 'HARMONS',
    //   altStore: '',
    //   expectedFrequency: '',
    //   observedFrequency: '',
    //   id: 8,
    //   checked: false,
    // },
  ],
  transactions: [],
  error: null,
  loading: true,
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions

  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions')

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      })
    }
  }

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

  function deleteItemFromList(id) {
    dispatch({
      type: 'DELETE_ITEM_FROM_LIST',
      payload: id,
    })
  }

  function addItemToList(item) {
    dispatch({
      type: 'ADD_ITEM_TO_LIST',
      payload: item,
    })
  }

  function toggleChecked(item) {
    dispatch({
      type: 'TOGGLE_CHECKED',
      payload: item,
    })
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
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
