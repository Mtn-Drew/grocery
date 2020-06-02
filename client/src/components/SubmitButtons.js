import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

//submit button stores all checked items in history and removes them from current list
//reset button clears the list

function SubmitButtons() {

  console.log('Submitbuttons has rendered xxxxxxxxxxxxxxxxxxxxxxxx')

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
      <button onClick={handleSubmit}>SUBMIT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default SubmitButtons
