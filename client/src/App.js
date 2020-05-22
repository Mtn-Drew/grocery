import React from 'react'
import './App.css'

import Header from './components/Header'
import GroceryList from './components/GroceryList'
import HistoryList from './components/HistoryList'
import MakeGroceryList from './components/MakeGroceryList'
import StoreList from './components/StoreList'
import SubmitButtons from './components/SubmitButtons'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <SubmitButtons />

      <GroceryList />
      <MakeGroceryList />
      <HistoryList />
      <StoreList />
    </GlobalProvider>
  )
}

export default App
