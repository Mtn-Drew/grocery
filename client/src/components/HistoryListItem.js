import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function HistoryListItem(props) {
  const { deleteItemFromHistory } = useContext(GlobalContext)
  const [showDescription, setShowDescription] = useState(false)
  const description = (
    <ul>
      <li>{props.store}</li>
      <li>{props.aisle}</li>
      <li>{props.description}</li>
    </ul>
  )
  return (
    <div>
      <div
        onClick={() => {
          setShowDescription(!showDescription)
        }}
      >
        <button
          className="delete-btn"
          onClick={() => deleteItemFromHistory(props.hiid)}
        >
          X
        </button>
        {props.name}
        {showDescription ? description : null}
      </div>
    </div>
  )
}

export default HistoryListItem
