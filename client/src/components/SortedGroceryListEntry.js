import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import {FiDelete, FiCheckSquare} from 'react-icons/fi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Modal from './Modal'
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

  const [newItemName, setNewItemName] = useState('')
  useEffect(() => {
    setNewItemName(`${modalName}`)
    console.log('this prevents requiring double click on checked after modal ', newItemName)
  }, [modalName, newItemName])

  return (
    <div>
      {showModal ? (
        <Modal>
          <MakeGroceryList
            name={modalName}
            description={modalDescription}
            aisle={modalAisle}
            store={modalStore}
            _id={modalId}
            date={modalDate}
          />
          <button onClick={toggleModal} className={'myButton'}>Cancel</button>
        </Modal>
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
              <button
                className="delete-btn"
                style={{ textDecoration: '' }}
                onClick={() => deleteItemFromList(item._id)}
              >
                <RiDeleteBin2Line className={'check-delete-icon'}/>
              </button>
              <span onClick={() => toggleModal(item)}>{item.itemName}</span>{' '}
              <span onClick={() => toggleModal(item)}> {item.aisle} </span>
              <button className="check-btn" onClick={() => toggleChecked(item)}>
                <FiCheckSquare/>
              </button>
            </li>
          ))}
        </SlideDown>
      </ul>
    </div>
  )
}

export default SortedGroceryListEntry
