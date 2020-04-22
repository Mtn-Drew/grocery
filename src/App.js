import React from 'react'
import './App.css'

import Header from './components/Header'
import GroceryList from './components/GroceryList'
import HistoryList from './components/HistoryList'
import MakeList from './components/MakeList'
import SubmitButtons from './components/SubmitButtons'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <SubmitButtons />
      <GroceryList />
      <MakeList />
      <HistoryList />
    </GlobalProvider>
  )
}

export default App
