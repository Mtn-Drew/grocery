import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//alt store is set if user picks store other than default

//Init state
const initialState = {
  store: [
    {
      storeName: 'Harmons',
      description: '',
      location: '',
      id: 1,
    },
    {
      storeName: 'Costco',
      description: '',
      location: '',
      id: 2,
    },
    {
      storeName: 'Winco',
      description: '',
      location: '',
      id: 3,
    },
    {
      storeName: 'Any',
      description: '',
      location: '',
      id: 4,
    },
  ],
  groceryItem: [
    {
      itemName: 'eggs',
      description: 'chicken embryo',
      aisle: 'eggs',
      defaultStore: 'Costco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 1,
      checked: false,
    },
    {
      itemName: 'meat',
      description: 'flesh of animals',
      aisle: 'meat',
      defaultStore: 'Costco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 2,
      checked: false,
    },
    {
      itemName: 'half -n- half',
      description: 'coffee condiment',
      aisle: 'dairy',
      defaultStore: 'Winco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 3,
      checked: false,
    },
    {
      itemName: 'brussel sprouts',
      description: 'little lettuce cabbage heads',
      aisle: 'produce',
      defaultStore: 'Harmons',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 4,
      checked: false,
    },
    {
      itemName: 'cat food',
      description: 'feline sustenance',
      aisle: 'pet',
      defaultStore: 'Winco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 5,
      checked: false,
    },
    {
      itemName: 'broccoli',
      description: 'little lettuce cabbage heads',
      aisle: 'produce',
      defaultStore: 'Harmons',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 6,
      checked: false,
    },
    {
      itemName: 'craft beer',
      description: 'little lettuce cabbage heads',
      aisle: 'beer',
      defaultStore: 'Harmons',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 7,
      checked: false,
    },
    {
      itemName: 'apples',
      description: 'little lettuce cabbage heads',
      aisle: 'produce',
      defaultStore: 'Harmons',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
      id: 8,
      checked: false,
    },
  ],
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
