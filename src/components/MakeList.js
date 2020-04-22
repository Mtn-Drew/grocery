import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// under input, display the closest search result to what has been typed so far.  When you click on search result,  you select that item.  You can then click to add to list, or click edit
//when found in search, it lists default values (aisle, store, frequency)
//when you click edit, you can change values for aisle, store, frequency

function MakeList() {
  const { addItemToList, store } = useContext(GlobalContext)
  const [newItemName, setNewItemName] = useState('')
  const [newItemDescription, setNewItemDescription] = useState('')
  const [newItemAisle, setNewItemAisle] = useState('')
  const [newItemStore, setNewItemStore] = useState('')
  const [newItemFrequency, setNewItemFrequency] = useState('')

  const resetForm = () => {
    setNewItemName('')
    setNewItemDescription('')
    setNewItemAisle('')
    setNewItemStore('')
    setNewItemFrequency('')
  }

  const addToList = (e) => {
    e.preventDefault()
    console.log('in addToList ')
    const newItem = {
      id: Math.floor(Math.random() * 1000000),
      itemName: newItemName.toLowerCase(),
      description: newItemDescription,
      aisle: newItemAisle.toLowerCase(),
      defaultStore: newItemStore.toUpperCase(),
      expectedFrequency: newItemFrequency,
    }

    //check newItemStore against store values in context and set to 'any/other' if it doesn't match
    const testArr = store.filter((s) => s === newItem.defaultStore)
    console.log('testArr ->', testArr)
    if (testArr.length === 0) {
      newItem.defaultStore = 'ANY/OTHER'
    }

    console.log('newItem -> ', newItem)
    addItemToList(newItem)
    resetForm()
  }

  return (
    <div>
      <h3>Add item to list</h3>
      <form onSubmit={addToList}>
        <div className="form-control">
          <label htmlFor="text">Search or Add New Item</label>
          <input
            type="text"
            placeholder="grocery item name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            required
          />
        </div>
        {/* <input type="text" value={newItemName} onChange={() => {}} /> */}

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
            placeholder="frequency"
            value={newItemFrequency}
            onChange={(e) => setNewItemFrequency(e.target.value)}
          />
        </div>

        <button className="btn">Add To Grocery List</button>
      </form>
    </div>
  )
}

export default MakeList
