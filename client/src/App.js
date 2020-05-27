import React, { useContext, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import GroceryList from './components/GroceryList'
import HistoryList from './components/HistoryList'
import MakeGroceryList from './components/MakeGroceryList'
import StoreList from './components/StoreList'
import SubmitButtons from './components/SubmitButtons'
import Modal from './components/Modal'

import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <div className="App">
        <Modal />
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
