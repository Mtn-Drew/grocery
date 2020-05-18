import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import Loader from './Loader'
import StoreListEntry from './StoreListEntry'
import MakeStoreList from './MakeStoreList'

function StoreList() {
  const { store, storeLoading } = useContext(GlobalContext)
  const [displayedList, setDisplayedList] = useState([])
  const [showMakeStoreList, setShowMakeStoreList] = useState(false)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    setDisplayedList([])

    store.map((s) => {
      const newListItem = (
        <li key={s._id}>
          <StoreListEntry
            name={s.storeName}
            sid={s._id}
            description={s.description}
          />
        </li>
      )
      setDisplayedList((prev) => [...prev, newListItem])
      return null
    })
  }, [store])

  return (
    <div>
      <h3>
        store list
        <span onClick={() => setShowList(!showList)}>
          {showList ? '🔼' : '🔽'}
        </span>
        {showList ? (
          <span onClick={() => setShowMakeStoreList(!showMakeStoreList)}>
            {showMakeStoreList ? '➖' : '➕'}
          </span>
        ) : null}
      </h3>

      {showMakeStoreList && showList ? <MakeStoreList /> : null}
      {showList ? (
        <ul className="list">{storeLoading ? <Loader /> : displayedList}</ul>
      ) : null}
    </div>
  )
}

export default StoreList
