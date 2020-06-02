import React from 'react'

 function itemDescription(props) {

  console.log('itemDescription has rendered xxxxxxxxxxxxxxxxxxxxxxxx')

  return (
    <ul>
        <li>{props.store}</li>
        <li>{props.aisle}</li>
        <li>{props.description}</li>
      </ul>
  )
}

export default itemDescription