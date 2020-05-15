import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import StoreList from './StoreList'
import Loader from './Loader'

function GroceryList() {
  const {
    store,
    getStores,
    groceryItem,
    getGroceryItems,
    loading,
  } = useContext(GlobalContext)

  const [displayedList, setDisplayedList] = useState([])

  useEffect(() => {
    getGroceryItems()
    getStores()
    //eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('in UE getGroceryItems-groceryItem->', groceryItem)
  }, [])

  useEffect(() => {
    console.log('in UE 2--')

    const sortedGroceries = groceryItem.sort((a, b) =>
      a.aisle > b.aisle ? 1 : a.itemName > b.itemName ? 1 : -1
    )

    console.log('sorted->', sortedGroceries)

    const listByStore = (store) => {
      const list = sortedGroceries.filter(
        (item) =>
          item.defaultStore.toUpperCase() === store.storeName.toUpperCase()
      )

      if (list.length !== 0) {
        let newListItem = (
          <StoreList name={store.storeName} list={list} key={store._id} />
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
      <h3>grocery list</h3>
      {loading ? <Loader /> : displayedList}
    </div>
  )
}

export default GroceryList
