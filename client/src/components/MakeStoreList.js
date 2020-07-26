import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

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
    const newStore = {
      storeName: newStoreName.toUpperCase(),
      description: newStoreDescription,
    }
    addStore(newStore)
    resetForm()
  }

  return (
    <div>
      <h2>Add Store</h2>
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
