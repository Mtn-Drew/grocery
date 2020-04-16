import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import StoreList from './StoreList'

function GroceryList() {
  const { store, groceryItem, deleteItemFromList } = useContext(GlobalContext)
  const [displayedList, setDisplayedList] = useState([])

  useEffect(() => {
    store.filter(listByStore)
  }, [])

  const listByStore = (store, i) => {
    const list = groceryItem.filter(
      (item) => item.defaultStore === store.storeName
    )
    let newListItem = (
      <StoreList
        name={store.storeName}
        list={list}
        key={i}
        // delete={deleteItemFromList}
      />
    )

    setDisplayedList((prev) => [...prev, newListItem])

    //still need to sort by aisle
  }

  return (
    <div className="container">
      <h3>grocery list</h3>
      {displayedList}
    </div>
  )
}

export default GroceryList
