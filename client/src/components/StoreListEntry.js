import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

import {RiDeleteBin6Line} from 'react-icons/ri'

function StoreListEntry(props) {

  const { deleteStore } = useContext(GlobalContext)
  const [showDescription, setShowDescription] = useState(false)

  const description = <div>{props.description}</div>
 
  return (
    <div
      onClick={() => {
        setShowDescription(!showDescription)
      }}
    >
      <button className="delete-btn" style={{marginRight: 20}} onClick={() => deleteStore(props.sid)}>
      <RiDeleteBin6Line />
      </button>
      {props.name}
      {showDescription ? description : null}
    </div>
  )
}

export default StoreListEntry
