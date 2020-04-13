import React from 'react'

function StoreList(props) {
  console.log('inStoreList')
  console.log(props)
  return (
    <div>
      <h4>{props.name}</h4>
      <ul className="list">
        {props.list.map((item) => (
          <li key={item.itemName}>
            {item.itemName} <span>{item.aisle} </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoreList
