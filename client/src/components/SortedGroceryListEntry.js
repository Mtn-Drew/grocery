import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function SortedListEntry(props) {
  const { toggleChecked, deleteItemFromList } = useContext(GlobalContext)

  return (
    <div>
      <h4>{props.name}</h4>
      <ul className="list">
        {props.list.map((item) => (
          <li
            key={item._id}
            style={{ textDecoration: item.checked ? 'line-through' : '' }}
          >
            <button
              className="delete-btn"
              style={{ textDecoration: '' }}
              onClick={() => deleteItemFromList(item._id)}
            >
              X
            </button>
            {item.itemName} <span> {item.aisle} </span>
            <button className="check-btn" onClick={() => toggleChecked(item)}>
              ✓
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortedListEntry
