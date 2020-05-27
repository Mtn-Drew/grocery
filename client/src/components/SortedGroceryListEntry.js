import React, { useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'




function SortedListEntry(props) {
  const { toggleChecked, deleteItemFromList, showModal, toggleModal } = useContext(GlobalContext)
  
 

  return (
    <div>
      <h4>{props.name}</h4>
      
      
      <ul className="list">
        <SlideDown>
          {props.list.map((item) => (
            
            <li
              key={item._id}
              style={{ textDecoration: item.checked ? 'line-through' : '' }}
              onClick={()=>toggleModal(item)}
            >
              {console.log('showModal --> ', showModal)}
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
              <button onClick={()=>!showModal}>open modal</button>
            </li>

            
          ))}
           
        </SlideDown>
      </ul>
    </div>
  )
}

export default SortedListEntry
