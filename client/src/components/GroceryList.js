import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import StoreList from './StoreList'

function GroceryList() {
  const { store, groceryItem, getGroceryItems } = useContext(GlobalContext)

  const [displayedList, setDisplayedList] = useState([])

  useEffect(() => {
    getGroceryItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const listByStore = (store, i) => {
      const list = sortedGroceries.filter(
        (item) => item.defaultStore === store.storeName
      )

      if (list.length !== 0) {
        let newListItem = (
          <StoreList name={store.storeName} list={list} key={i} />
        )
        setDisplayedList((prev) => [...prev, newListItem])
      }
    }

    const sortedGroceries = groceryItem.sort((a, b) =>
      a.aisle > b.aisle ? 1 : a.itemName > b.itemName ? 1 : -1
    )

    setDisplayedList([])
    store.filter(listByStore)
  }, [groceryItem, store])

  return (
    <div className="container">
      {console.log('groceryItem -', groceryItem)}
      <h3>grocery list</h3>
      {displayedList}
    </div>
  )
}

export default GroceryList
