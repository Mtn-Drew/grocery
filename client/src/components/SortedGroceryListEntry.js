import React, { useContext, useState } from 'react'
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
  } = useContext(GlobalContext)

  return (
    <div>
     
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
            </li>
          ))}
        </SlideDown>
      </ul>
    </div>
  )
}

export default SortedGroceryListEntry
