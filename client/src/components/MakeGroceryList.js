import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SearchBar from './SearchBar'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

// under input, display the closest search result to what has been typed so far.  When you click on search result,  you select that item.  You can then click to add to list, or click edit
//when found in search, it lists default values (aisle, store, frequency)
//when you click edit, you can change values for aisle, store, frequency

function MakeList(props) {
  const { addItemToList, store, updateGroceryItem, toggleModal } = useContext(GlobalContext)
  const [newItemName, setNewItemName] = useState('')
  const [newItemDescription, setNewItemDescription] = useState('')
  const [newItemAisle, setNewItemAisle] = useState('')
  const [newItemStore, setNewItemStore] = useState('')
  const [newItemLastPurchased, setNewItemLastPurchased] = useState('')
  const [updateItemId, setUpdateItemId] = useState('')
  const [showForm, setShowForm] = useState(true)

  const resetForm = () => {
    setNewItemName('')
    setNewItemDescription('')
    setNewItemAisle('')
    setNewItemStore('')
    setNewItemLastPurchased('')
    setUpdateItemId('')
  }

  const getInitialValues = () => {
    if (props.name) {
      setNewItemName(props.name)
      setUpdateItemId(props._id)
      console.log('props--------', props)
    }
    if(props.description){
      setNewItemDescription(props.description)
    }
    if(props.store){
      setNewItemStore(props.store)
    }
    if (props.aisle) {
      setNewItemAisle(props.aisle)
    }
    
  }

  useEffect(() => {
    console.log('MakeGroceryList has rendered xxxxxxxxxxxxxx')
    getInitialValues()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToList = (e) => {
    e.preventDefault()
    console.log('in addToList ')
    const newItem = {
      itemName: newItemName.toLowerCase(),
      description: newItemDescription,
      aisle: newItemAisle.toLowerCase(),
      defaultStore: newItemStore.toUpperCase().replace('\'',''),
    }

    //check newItemStore against store values in context and set to 'any/other' if it doesn't match
    //add option to add store??
    const testArr = store.filter((s) => s.storeName === newItem.defaultStore)
    console.log('testArr ->', testArr)
    console.log('defaultStore->', newItem.defaultStore)
    if (testArr.length === 0) {
      newItem.defaultStore = 'ANY/OTHER'
    }

    console.log('newItem -> ', newItem)
    addItemToList(newItem)
    resetForm()
  }

  const updateItem = (e) =>{
    e.preventDefault()
    console.log('in updateItem ')
    const newItem = {
      itemName: newItemName.toLowerCase(),
      description: newItemDescription,
      aisle: newItemAisle.toLowerCase(),
      defaultStore: newItemStore.toUpperCase().replace('\'',''),
      _id:updateItemId,
    }

    //check newItemStore against store values in context and set to 'any/other' if it doesn't match
    //add option to add store??
    const testArr = store.filter((s) => s.storeName === newItem.defaultStore)
    console.log('testArr ->', testArr)
    console.log('defaultStore->', newItem.defaultStore)
    if (testArr.length === 0) {
      newItem.defaultStore = 'ANY/OTHER'
    }

    console.log('updateItem -> ', newItem)
    updateGroceryItem(newItem)
     toggleModal()
    

  }
  

  return (
    <div>
      {props.name ? null : (
      
      <>
      <h3>
        Add item to list
        <span onClick={() => setShowForm(!showForm)}>
          {showForm ? '🔼' : '🔽'}
        </span>
      </h3>
      
        <SearchBar />
        </>)}
        <SlideDown>
        {showForm ? (
          
          <form onSubmit={props.name ? updateItem : addToList}>
            <div className="form-control">
              <label htmlFor="text">{props.name ? '':'Add New Item'}</label>
              <input
                type="text"
                placeholder="grocery item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                required
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
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="store"
                value={newItemStore}
                onChange={(e) => setNewItemStore(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="date last purchased"
                value={newItemLastPurchased}
                readOnly
              />
            </div>

            <button className="btn">{props.name ? 'Update Item': 'Add To Grocery List' }</button>
          </form>
        ) : null}
      </SlideDown>
    </div>
  )
}

MakeList.whyDidYouRender = true

export default MakeList
