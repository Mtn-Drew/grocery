import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { RiCloudLine } from 'react-icons/ri'
import {BsFillExclamationTriangleFill} from 'react-icons/bs'

function SubmitButtons() {
  const { groceryItem, addItemToHistory, deleteItemFromList } = useContext(
    GlobalContext
  )
  const handleReset = () => {
    groceryItem.forEach((item) => {
      deleteItemFromList(item._id)
    })
  }
  const handleSubmit = () => {
    const checked = groceryItem.filter((item) => item.checked === true)
    checked.map((item) => {
      const histItem = {
        groceryItemName: item.itemName,
        storeName: item.defaultStore,
        groceryItemDescription: item.description,
        groceryItemAisle: item.aisle,
      }
      addItemToHistory(histItem)
      deleteItemFromList(item._id)
      return null
    })
  }

  return (
    <div>
      <button onClick={handleSubmit} className={'myButton'}>
        SUBMIT<RiCloudLine className={'up-down-icon'}/>
      </button>
      <button onClick={handleReset} className={'myButton'}>
        RESET<BsFillExclamationTriangleFill className={'up-down-icon'}/>
      </button>
    </div>
  )
}

// SubmitButtons.whyDidYouRender = true

export default SubmitButtons
