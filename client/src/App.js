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
      <div className="App">
        <Header />
        <SubmitButtons />
        <GroceryList />
        <MakeGroceryList />
        <HistoryList />
        <StoreList />
      </div>
    </GlobalProvider>
  )
}

export default App
