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
    },
    {
      storeName: 'Costco',
      description: '',
      location: '',
    },
    {
      storeName: 'Winco',
      description: '',
      location: '',
    },
    {
      storeName: 'Any',
      description: '',
      location: '',
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
    },
    {
      itemName: 'meat',
      description: 'flesh of animals',
      aisle: 'meat',
      defaultStore: 'Costco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
    },
    {
      itemName: 'half -n- half',
      description: 'coffee condiment',
      aisle: 'dairy',
      defaultStore: 'Winco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
    },
    {
      itemName: 'brussel sprouts',
      description: 'little lettuce cabbage heads',
      aisle: 'produce',
      defaultStore: 'Harmons',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
    },
    {
      itemName: 'cat food',
      description: 'feline sustenance',
      aisle: 'pet',
      defaultStore: 'Winco',
      altStore: '',
      expectedFrequency: '',
      observedFrequency: '',
    },
  ],
}

// Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalContext.Provider
      value={{ store: state.store, groceryItem: state.groceryItem }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
