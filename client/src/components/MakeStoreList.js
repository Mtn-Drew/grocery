import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// under input, display the closest search result to what has been typed so far.  When you click on search result,  you select that item.  You can then click to add to list, or click edit
//when found in search, it lists default values (aisle, store, frequency)
//when you click edit, you can change values for aisle, store, frequency

function MakeStoreList() {
  const { addStore } = useContext(GlobalContext)
  const [newStoreName, setNewStoreName] = useState('')
  const [newStoreDescription, setNewStoreDescription] = useState('')

  const resetForm = () => {
    setNewStoreName('')
    setNewStoreDescription('')
  }

  const addToList = (e) => {
    e.preventDefault()
    console.log('in addToList ')
    const newStore = {
      storeName: newStoreName.toUpperCase(),
      description: newStoreDescription,
    }

    console.log('newStore -> ', newStore)
    addStore(newStore)
    resetForm()
  }

  return (
    <div>
      <h3>Add Store</h3>
      <form onSubmit={addToList}>
        <div className="form-control">
          <label htmlFor="text">Search or Add New Store</label>
          <input
            type="text"
            placeholder="store name"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder="description"
            value={newStoreDescription}
            onChange={(e) => setNewStoreDescription(e.target.value)}
          />
        </div>

        <button className="btn">Add To Store List</button>
      </form>
    </div>
  )
}

export default MakeStoreList
