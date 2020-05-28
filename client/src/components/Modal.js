import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { GlobalContext } from '../context/GlobalState'

 

 
  

  function Modal(props) {  
    const {showModal}=useContext(GlobalContext)
    const modal = (
      <div className={`modalBackground modalShowing-${showModal}`}>
        {console.log('showMOdal is --', showModal)}
        <form onSubmit={() => {}} className="modalInner">
          <div className="form-control">
            <label htmlFor="text">Grocery Item</label>
            <input
              type="text"
              placeholder="grocery item name"
              // value={action.payload.itemName}
              // onChange={(e) => setNewItemName(e.target.value)}
              // required
              readOnly
            />
          </div>
  
          <div className="form-control">
            <input
              type="text"
              placeholder="description"
              // value={newItemDescription}
              // onChange={(e) => setNewItemDescription(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="aisle"
              // value={action.payload.aisle}
              // onChange={(e) => setNewItemAisle(e.target.value)}
              readOnly
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="store"
              // value={action.payload.defaultStore}
              // onChange={(e) => setNewItemStore(e.target.value)}
              readOnly
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="date last purchased"
              // value={newItemLastPurchased}
              readOnly
            />
          </div>
  
          <button className="btn">Update</button>
        </form>
      </div>
    )
    return ReactDOM.createPortal(modal, document.querySelector("#modal"))}


export default Modal
