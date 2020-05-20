import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function SearchBar() {
  const { historyItem, addItemToList } = useContext(GlobalContext)
  const [query, setQuery] = useState('')

  const [displayResults, setDisplayResults] = useState([])

  const addToList = (item) => {
    return (event) => {
      event.preventDefault()
      const newItem = {
        itemName: item.groceryItemName,
        description: item.groceryItemDescription,
        aisle: item.groceryItemAisle,
        defaultStore: item.storeName,
      }
      addItemToList(newItem)
    }
  }

  const handleChange = (e) => {
    let matches = historyItem.filter((item) => {
      const regex = new RegExp(`^${e.target.value}`, 'gi')
      return item.groceryItemName.match(regex)
    })
    if (e.target.value.length < 2) {
      matches = []
      setDisplayResults([])
    } else {
      const makeDisplay = matches.map((item) => {
        return (
          <form
            onSubmit={addToList(item)}
            key={item.lastPurchased + item.groceryItemName}
          >
            <div className="form-control">
              <label htmlFor="text">Add New Item</label>
              <input
                type="text"
                placeholder="grocery item name"
                value={item.groceryItemName}
                name="groceryName"
                readOnly
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="description"
                value={item.groceryItemDescription}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="aisle"
                value={item.groceryItemAisle}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="store"
                value={item.storeName}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="date last purchased"
                value={item.lastPurchased}
                readOnly
              />
            </div>

            <button className="btn">Add To Grocery List</button>
          </form>
        )
      })
      setDisplayResults(makeDisplay)
    }

    console.log('matches-->', matches)
    setQuery(e.target.value)
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />{' '}
      </form>
      {displayResults}
    </div>
  )
}

export default SearchBar
