import React, { useState } from 'react'

//by date, store or by item toggle?

function HistoryList() {
  const [showList, setShowList] = useState(false)

  return (
    <>
      <h3>
        history list
        <span onClick={() => setShowList(!showList)}>
          {showList ? '🔼' : '🔽'}
        </span>
      </h3>
      {showList ? <div>Eggs date</div> : null}
    </>
  )
}

export default HistoryList
