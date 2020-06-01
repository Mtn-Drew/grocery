import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import HistoryListItem from './HistoryListItem'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

function HistoryList() {
  const [showList, setShowList] = useState(false)
  const [displayedList, setDisplayedList] = useState('')
  const { historyItem } = useContext(GlobalContext)

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

  return (
    <div>
      <h3>
        history list
        <span onClick={() => setShowList(!showList)}>
          {showList ? '🔼' : '🔽'}
        </span>
      </h3>
      <SlideDown>
        {showList ? (
          <ul className="list">
            <div>{displayedList}</div>
          </ul>
        ) : null}
      </SlideDown>
    </div>
  )
}

export default HistoryList
