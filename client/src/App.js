import React, { useContext, useRef, useEffect, forwardRef } from 'react'
import './App.css'

import Header from './components/Header'
import GroceryList from './components/GroceryList'
import HistoryList from './components/HistoryList'
import MakeGroceryList from './components/MakeGroceryList'
import StoreList from './components/StoreList'
import SubmitButtons from './components/SubmitButtons'


// import Modal from './components/Modal'
// import Mod2 from './components/Mod2'

import { GlobalProvider} from './context/GlobalState'

function App() {

// const {showModal}=useContext(GlobalContext)
// const modalRef = useRef()

  return (
    <GlobalProvider>
      <div className="App">
        {/* {console.log('showModal is -', showModal)}
        
       <Mod2 ref={modalRef}>
        <form onSubmit={() => {}} className="modalInner">
          <div className="form-control">
            <label htmlFor="text">Grocery Item</label>
            <input
              type="text"
              placeholder="grocery item name"
              // value={action.payload.itemName}
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
              // value={action.payload.aisle}
              // onChange={(e) => setNewItemAisle(e.target.value)}
              readOnly
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="store"
              // value={action.payload.defaultStore}
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
        </Mod2>  */}
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
