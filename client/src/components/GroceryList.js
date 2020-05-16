import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import SortedGroceryListEntry from './SortedGroceryListEntry'
import Loader from './Loader'

function GroceryList() {
  const {
    store,
    getStores,
    groceryItem,
    getGroceryItems,
    groceryLoading,
  } = useContext(GlobalContext)

  const [displayedList, setDisplayedList] = useState([])
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    getGroceryItems()
    getStores()
    //eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('in UE getGroceryItems-groceryItem->', groceryItem)
  }, [])

  useEffect(() => {
    console.log('in UE 2--')

    // const sortedGroceries = groceryItem.sort((a, b) =>
    //   a.aisle > b.aisle ? 1 : a.itemName > b.itemName ? 1 : -1
    // )

    const sortedGroceries = groceryItem.sort((a, b) =>
      a.aisle > b.aisle ? 1 : -1
    )

    console.log('sorted->', sortedGroceries)

    const listByStore = (store) => {
      const list = sortedGroceries.filter(
        (item) =>
          item.defaultStore.toUpperCase() === store.storeName.toUpperCase()
      )

      if (list.length !== 0) {
        let newListItem = (
          <SortedGroceryListEntry
            name={store.storeName}
            list={list}
            key={store._id}
          />
        )
        setDisplayedList((prev) => [...prev, newListItem])
      }
    }

    setDisplayedList([])
    store.filter(listByStore)
  }, [groceryItem, store])

  return (
    <div className="container">
      {console.log('groceryItem -', groceryItem)}
      {console.log('store -', store)}
      <h3>
        grocery list
        <span onClick={() => setShowList(!showList)}>
          {showList ? '🔼' : '🔽'}
        </span>
      </h3>
      {showList ? groceryLoading ? <Loader /> : displayedList : null}
    </div>
  )
}

export default GroceryList
