import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

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
      setQuery('')
      setDisplayResults([])
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
      let noDuplicateMatches = []
      if (matches.length > 1) {
        const sortedMatches = matches.sort((a, b) =>
          a.groceryItemName > b.groceryItemName ? 1 : -1
        )
        noDuplicateMatches = [matches[0]]
        for (let i = 1; i < matches.length; i++) {
          if (
            sortedMatches[i].groceryItemName !==
            sortedMatches[i - 1].groceryItemName
          ) {
            noDuplicateMatches.push(sortedMatches[i])
          }
        }
      } else {
        //if fewer than 2 matches, just clone matches into noDuplicateMatches
        noDuplicateMatches = matches.map((x) => x)
      }
      const makeDisplay = noDuplicateMatches.map((item) => {
        return (
          <SlideDown key={item._id} id="add-item-form">
            <form onSubmit={addToList(item)}>
              <div className="form-control">
                <label htmlFor="add-item-form">Add New Item</label>
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
          </SlideDown>
        )
      })
      setDisplayResults(makeDisplay)
    }
    setQuery(e.target.value)
  }
  return (
    <div>
      <form>
        <label>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        /></label>{' '}
      </form>
      {displayResults}
    </div>
  )
}

export default SearchBar
