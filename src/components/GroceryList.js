import React, { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState'

//store lists, sort by section
//store list will have up/down button to change order
//items will have option to check (added item to cart), delete (remove item from list)

function GroceryList() {
  const { store, groceryItem } = useContext(GlobalContext)

  return (
    <div className="container">
      <h3>grocery list</h3>
      <ul className="list">
        {groceryItem.map((item) => (
          <li>
            {item.itemName} <span>{item.aisle} </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroceryList
