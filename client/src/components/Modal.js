import React, { useContext} from 'react'
import ReactDOM from 'react-dom'
import { GlobalContext } from '../context/GlobalState'

const Modal = (props) => {
  console.log('Modal has rendered xxxxxxxxxxxxxxxxxxxxxxxx')

const { toggleModal } = useContext(GlobalContext)
  
  const modal = (

    <div className={'modal-wrapper'}>
      <div className={'modal-backdrop'} onClick={toggleModal}/>
      <div className={'modal-box'}>{props.children}</div>
    </div>
  )

  return ReactDOM.createPortal(modal, document.querySelector('#modal'))
}

export default Modal
