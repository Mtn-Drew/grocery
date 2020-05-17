import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

function StoreListEntry(props) {
  const { deleteStore } = useContext(GlobalContext)
  const [showDescription, setShowDescription] = useState(false)

  const description = <div>{props.description}</div>
  // const addStoreForm = <form></form>

  return (
    <div
      onClick={() => {
        setShowDescription(!showDescription)
      }}
    >
      {/* {console.log('props-', props)} */}
      <button className="delete-btn" onClick={() => deleteStore(props.sid)}>
        X
      </button>
      {props.name}
      {showDescription ? description : null}
    </div>
  )
}

export default StoreListEntry
