import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { FiCheckSquare} from 'react-icons/fi'
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
      <h3>{props.name}</h3>
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
