import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function StoreList(props) {
  const { toggleChecked, deleteItemFromList } = useContext(GlobalContext)

  return (
    <div>
      <h4>{props.name}</h4>
      <ul className="list">
        {props.list.map((item) => (
          <li
            key={item.itemName}
            style={{ textDecoration: item.checked ? 'line-through' : '' }}
            onClick={() => toggleChecked(item)}
          >
            {item.itemName} <span>{item.aisle} </span>
            <button
              className="delete-btn"
              onClick={() => deleteItemFromList(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoreList
