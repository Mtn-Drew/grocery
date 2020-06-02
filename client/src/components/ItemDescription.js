import React from 'react'

 function itemDescription(props) {

  return (
    <ul>
        <li>{props.store}</li>
        <li>{props.aisle}</li>
        <li>{props.description}</li>
      </ul>
  )
}

export default itemDescription