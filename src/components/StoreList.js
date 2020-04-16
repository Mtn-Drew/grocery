import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function StoreList(props) {
  const { groceryItem, deleteItemFromList } = useContext(GlobalContext)

  const testFn = (item) => {
    deleteItemFromList(item.id)
    console.log('testFN ->', item)
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <ul className="list">
        {props.list.map((item) => (
          <li key={item.itemName}>
            {item.itemName} <span>{item.aisle} </span>
            <button className="delete-btn" onClick={() => testFn(item)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoreList
