import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import SortedGroceryListEntry from './SortedGroceryListEntry'
import Loader from './Loader'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

function GroceryList() {
  const {
    store,
    getStores,
    groceryItem,
    getGroceryItems,
    groceryLoading,
    getHistoryItems,
  } = useContext(GlobalContext)

  const [displayedList, setDisplayedList] = useState([])
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    getGroceryItems()
    getStores()
    getHistoryItems()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
   
    const sortedGroceries = groceryItem.sort((a, b) =>
      a.aisle > b.aisle ? 1 : -1
    )

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
      <h3>
        grocery list
        <span onClick={() => setShowList(!showList)}>
          {showList ? '🔼' : '🔽'}
        </span>
      </h3>
      <SlideDown>
        {showList ? groceryLoading ? <Loader /> : displayedList : null}
      </SlideDown>
    </div>
  )
}

export default GroceryList
