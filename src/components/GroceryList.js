import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState'

import StoreList from './StoreList'

//store lists, sort by section
//store list will have up/down button to change order
//items will have option to check (added item to cart), delete (remove item from list)

function GroceryList() {
  const { store, groceryItem } = useContext(GlobalContext)
  const [glist, setGlist] = useState([])

  useEffect(() => {
    store.filter(listByStore)
  }, [])

  const mylist = []

  const listByStore = (store, i) => {
    const list = groceryItem.filter(
      (item) => item.defaultStore === store.storeName
    )
    console.log(store.storeName) //string
    console.log(store) //single object
    console.log(list) //array of objects
    //insert store name and list into dom below <h3></h3>
    //call another function that creates the dom elements and saves them into an array that we can reference in the return below
    // addToDom(store, list)
  }

  // const addToDom = (store, list) => {
  //   setGlist((prev) => [...prev, <StoreList name={store} list={list} />])
  // }
  let div = (
    <div>
      {/* <h4>{name}</h4> */}
      <ul className="list">
        {groceryItem.map((item) => (
          <li key={item.itemName}>
            {item.itemName} <span>{item.aisle} </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  )
  console.log(glist)
  return (
    <div className="container">
      <h3>grocery list</h3>
      {/* {glist} */}
      {div}
    </div>
  )
}

export default GroceryList

{
  /*}
<div>
{/* <h4>{name}</h4> */
}
{
  /* <ul className="list">
  {groceryItem.map((item) => (
    <li key={item.itemName}>
      {item.itemName} <span>{item.aisle} </span>
      <button className="delete-btn">x</button>
    </li>
  ))}
</ul>
</div> */
}
