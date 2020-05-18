import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import HistoryListItem from './HistoryListItem'

//by date, store or by item toggle?

function HistoryList() {
  const [showList, setShowList] = useState(false)
  const [displayedList, setDisplayedList] = useState('')
  const { historyItem } = useContext(GlobalContext)

  // useEffect(() => {
  //   getHistoryItems()
  //   console.log('historyItem----', historyItem)
  // }, [])

  useEffect(() => {
    setDisplayedList([])

    if (historyItem) {
      historyItem.map((hi) => {
        const newListItem = (
          <li key={hi._id}>
            <HistoryListItem
              hiid={hi._id}
              name={hi.groceryItemName}
              store={hi.storeName}
              aisle={hi.groceryItemAisle}
              description={hi.groceryItemDescription}
              date={hi.lastPurchased}
            />
          </li>
        )
        setDisplayedList((prev) => [...prev, newListItem])
        return null
      })
    }
  }, [historyItem])

  // useEffect(() => {
  //   historyItem.forEach((hi) => {
  //     const newListItem = (
  //       <HistoryListItem
  //         name={hi.groceryItemName}
  //         store={hi.storeName}
  //         desc={hi.groceryItemDescription}
  //         aisle={hi.groceryItemAisle}
  //         date={hi.lastPurchased}
  //         key={hi._id}
  //       />
  //     )
  //     setDisplayedList((prev) => [...prev, newListItem])
  //   })
  // }, [displayedList])

  return (
    <div>
      <h3>
        history list
        <span onClick={() => setShowList(!showList)}>
          {showList ? '🔼' : '🔽'}
        </span>
      </h3>
      {showList ? (
        <ul className="list">
          <div>{displayedList}</div>
        </ul>
      ) : null}
    </div>
  )
}

export default HistoryList
