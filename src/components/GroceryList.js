import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import StoreList from './StoreList'

function GroceryList() {
  const { store, groceryItem, deleteItemFromList } = useContext(GlobalContext)
  const [displayedList, setDisplayedList] = useState([])

  useEffect(() => {
    setDisplayedList([])
    store.filter(listByStore)
  }, [groceryItem])

  const listByStore = (store, i) => {
    const list = groceryItem.filter(
      (item) => item.defaultStore === store.storeName
    )

    if (list.length !== 0) {
      let newListItem = (
        <StoreList
          name={store.storeName}
          list={list}
          key={i}
          // delete={deleteItemFromList}
        />
      )
      setDisplayedList((prev) => [...prev, newListItem])
    }

    //still need to sort by aisle
    //still need to filter out stores with no items
  }

  return (
    <div className="container">
      <h3>grocery list</h3>
      {displayedList}
    </div>
  )
}

export default GroceryList
