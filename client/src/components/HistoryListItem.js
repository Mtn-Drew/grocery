import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function HistoryListItem(props) {
  const { deleteItemFromHistory } = useContext(GlobalContext)
  const [showDescription, setShowDescription] = useState(false)
  const description = (
    <div>
      <div>{props.store}</div>
      <div>{props.aisle}</div>
      <div>{props.description}</div>
    </div>
  )
  return (
    <div>
      <div
        onClick={() => {
          setShowDescription(!showDescription)
        }}
      >
        {console.log('props-', props)}
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
