import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SearchBar from './SearchBar'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

// under input, display the closest search result to what has been typed so far.  When you click on search result,  you select that item.  You can then click to add to list, or click edit
//when found in search, it lists default values (aisle, store, frequency)
//when you click edit, you can change values for aisle, store, frequency

function MakeList() {
  const { addItemToList, store } = useContext(GlobalContext)
  const [newItemName, setNewItemName] = useState('')
  const [newItemDescription, setNewItemDescription] = useState('')
  const [newItemAisle, setNewItemAisle] = useState('')
  const [newItemStore, setNewItemStore] = useState('')
  const [newItemLastPurchased, setNewItemLastPurchased] = useState('')
  const [showForm, setShowForm] = useState(true)

  const resetForm = () => {
    setNewItemName('')
    setNewItemDescription('')
    setNewItemAisle('')
    setNewItemStore('')
    setNewItemLastPurchased('')
  }

  const addToList = (e) => {
    e.preventDefault()
    console.log('in addToList ')
    const newItem = {
      itemName: newItemName.toLowerCase(),
      description: newItemDescription,
      aisle: newItemAisle.toLowerCase(),
      defaultStore: newItemStore.toUpperCase(),
    }

    //check newItemStore against store values in context and set to 'any/other' if it doesn't match
    //add option to add store??
    const testArr = store.filter((s) => s.storeName === newItem.defaultStore)
    console.log('testArr ->', testArr)
    console.log('defaultStore->', newItem.defaultStore)
    if (testArr.length === 0) {
      newItem.defaultStore = 'ANY/OTHER'
    }

    console.log('newItem -> ', newItem)
    addItemToList(newItem)
    resetForm()
  }

  return (
    <div>
      <h3>
        Add item to list
        <span onClick={() => setShowForm(!showForm)}>
          {showForm ? '🔼' : '🔽'}
        </span>
      </h3>
      <SlideDown>
        <SearchBar />
        {showForm ? (
          <form onSubmit={addToList}>
            <div className="form-control">
              <label htmlFor="text">Add New Item</label>
              <input
                type="text"
                placeholder="grocery item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="aisle"
                value={newItemAisle}
                onChange={(e) => setNewItemAisle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="store"
                value={newItemStore}
                onChange={(e) => setNewItemStore(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="date last purchased"
                value={newItemLastPurchased}
                readOnly
              />
            </div>

            <button className="btn">Add To Grocery List</button>
          </form>
        ) : null}
      </SlideDown>
    </div>
  )
}

export default MakeList
