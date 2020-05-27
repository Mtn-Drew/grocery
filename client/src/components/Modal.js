import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

 function Modal() {

  const {showModal, modal}=useContext(GlobalContext)

  return (
    <div>
      {showModal ? <div>{modal}</div> : null}
    </div>
  )
}

export default Modal
