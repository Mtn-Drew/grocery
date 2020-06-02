import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function StoreListEntry(props) {

  console.log('StoreListEntry has rendered xxxxxxxxxxxxxxxxxxxxxxxx')

  const { deleteStore } = useContext(GlobalContext)
  const [showDescription, setShowDescription] = useState(false)

  const description = <div>{props.description}</div>
 
  return (
    <div
      onClick={() => {
        setShowDescription(!showDescription)
      }}
    >
      <button className="delete-btn" onClick={() => deleteStore(props.sid)}>
        X
      </button>
      {props.name}
      {showDescription ? description : null}
    </div>
  )
}

export default StoreListEntry
