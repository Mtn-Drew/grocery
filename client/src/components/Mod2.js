import React, { useContext, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { GlobalContext } from '../context/GlobalState'
import { useImperativeHandle } from 'react'

const Mod2 = forwardRef( (props, ref) => {

  const { toggleModal } = useContext(GlobalContext)

  // useImperativeHandle(ref, ()=>{
  //   return {

  //   }
  // })
  
  const modal = (
    <div className={'modal-wrapper'}>
      <div className={'modal-backdrop'} onClick={toggleModal}/>
      <div className={'modal-box'}>{props.children}</div>
    </div>
  )

  return ReactDOM.createPortal(modal, document.querySelector('#modal'))
})

export default Mod2
