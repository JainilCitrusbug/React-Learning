import React from 'react'

function MemoComp({number}) {
  return (
    <div>{number}</div>
  )
}

export default React.memo(MemoComp)