import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import Loader from './Loader'
import StoreListEntry from './StoreListEntry'
import MakeStoreList from './MakeStoreList'

import {FcCollapse, FcExpand} from 'react-icons/fc'
import {FaPlus, FaMinus} from 'react-icons/fa'
 import {RiDeleteBin6Line} from 'react-icons/ri'
import SlideDown from 'react-slidedown'

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
          {!showList ? <FcExpand className={'up-down-icon'}/> : <FcCollapse className={'up-down-icon'}/>}
        </span>
        {showList ? (
          <span onClick={() => setShowMakeStoreList(!showMakeStoreList)}>
            {showMakeStoreList ? <FaMinus className={'up-down-icon'}/> : <FaPlus className={'up-down-icon'}/>}
          </span>
        ) : null}
      </h3>
      <SlideDown>
        {showMakeStoreList && showList ? <MakeStoreList /> : null}
        {showList ? (
          <ul className="list">{storeLoading ? <Loader /> : displayedList}</ul>
        ) : null}
      </SlideDown>
    </div>
  )
}

export default StoreList
