import React, { useState } from 'react'

// under input, display the closest search result to what has been typed so far.  When you click on search result,  you select that item.  You can then click to add to list, or click edit
//when found in search, it lists default values (aisle, store, frequency)
//when you click edit, you can change values for aisle, store, frequency

function MakeList() {
  const [newItemName, setNewItemName] = useState('')
  const [newItemDescription, setNewItemDescription] = useState('')
  const [newItemStore, setNewItemStore] = useState('')
  const [newItemFrequency, setNewItemFrequency] = useState('')

  const addToList = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h3>Add item to list</h3>
      <form onSubmit={addToList}>
        <div className="form-control">
          <label htmlFor="text">Search or Add New Item</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </div>
        <input type="text" value={newItemName} onChange={() => {}} />

        <button className="btn">Add To Grocery List</button>
      </form>
    </div>
  )
}

export default MakeList
