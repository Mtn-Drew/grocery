import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Mod2 from './Mod2'

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
    setNewModalName,
  } = useContext(GlobalContext)

  const [newItemName, setNewItemName] = useState('')
  const { newItemDescription, setNewItemDescription } = useState('')
  const { newItemAisle, setNewItemAisle } = useState('')
  const { newItemStore, setNewItemStore } = useState('')

  useEffect(() => {
    setNewItemName(`${modalName}`)
    console.log('UE modalName, newItemName- ', modalName, newItemName)
  }, [modalName])

  return (
    <div>
      {/* <Mod2 ref={modalRef}> */}
      {showModal ? (
        <Mod2>
          <form onSubmit={() => {}} className="modalInner">
            <div className="form-control">
              <label htmlFor="text">Grocery Item</label>
              {console.log('modalName is ---> ', modalName)}
              {console.log('newItemName is ---> ', newItemName)}
              <input
                type="text"
                placeholder="grocery item name"
                value={modalName}
                onChange={() => setNewModalName('testing')}
                // onChange={(e) => setNewModalName(e.target.value)}
                // required
                // readOnly
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                placeholder="description"
                value={newItemDescription}
                onChange={(e) => setNewItemDescription(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="aisle"
                value={newItemAisle}
                onChange={(e) => setNewItemAisle(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="store"
                value={newItemStore}
                onChange={(e) => setNewItemStore(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="date last purchased"
                // value={modalDate}
                readOnly
              />
            </div>

            <button className="btn">Update</button>
          </form>
          {/* <button onClick={() => toggleModal()}>Cancel</button> */}
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
