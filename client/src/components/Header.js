import React from 'react'
import {MdLocalGroceryStore} from 'react-icons/md'

function Header() {
  
  return (
    <div className="container">
      <h1><MdLocalGroceryStore className={'grocery-icon'}/>Smart Grocery List</h1>
    </div>
  )
}

export default Header
