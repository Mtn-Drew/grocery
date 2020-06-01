import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Mod2 from './Mod2'
import MakeGroceryList from './MakeGroceryList'

function SortedGroceryListEntry(props) {
  const {
    toggleChecked,
    deleteItemFromList,
    showModal,
    toggleModal,
    modalName,
    modalAisle,
    modalDate,
    modalDescription,
    modalStore,
    modalId,
    setNewModalName,
  } = useContext(GlobalContext)

  const [newItemName, setNewItemName] = useState('')
  const { newItemDescription, setNewItemDescription } = useState('')
  const { newItemAisle, setNewItemAisle } = useState('')
  const { newItemStore, setNewItemStore } = useState('')

  // useEffect(() => {
  //   setNewItemName(`${modalName}`)
  //   console.log('UE modalName, newItemName- ', modalName, newItemName)
  // }, [modalName])

  

  return (
    <div>
      {/* <Mod2 ref={modalRef}> */}
      {showModal ? (
        <Mod2>
          <MakeGroceryList 
          name={modalName}
          description={modalDescription}
          aisle={modalAisle}
          store={modalStore}
          _id={modalId}
          date={modalDate}
          
          
          />
          
          
          <button onClick={toggleModal}>Cancel</button>
        </Mod2>
      ) : null}

      <h4>{props.name}</h4>

      <ul className="list">
        <SlideDown>
          {props.list.map((item) => (
            <li
              key={item._id}
              style={{ textDecoration: item.checked ? 'line-through' : '' }}
              // onClick={()=>toggleModal(item)}
              className={'sorted-grocery-list-entry'}
            >
              {console.log('showModal --> ', showModal)}
              <button
                className="delete-btn"
                style={{ textDecoration: '' }}
                onClick={() => deleteItemFromList(item._id)}
              >
                X
              </button>
              <span onClick={() => toggleModal(item)}>{item.itemName}</span>{' '}
              <span onClick={() => toggleModal(item)}> {item.aisle} </span>
              <button className="check-btn" onClick={() => toggleChecked(item)}>
                ✓
              </button>
              {/* <button onClick={()=>!showModal}>toggle modal</button> */}
            </li>
          ))}
        </SlideDown>
      </ul>
    </div>
  )
}

export default SortedGroceryListEntry
