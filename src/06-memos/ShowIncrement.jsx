import React, { memo } from 'react'

export const ShowIncrement = memo( ({increment}) => {
    console.log("solo me ejecuto a la primera, ya que increment es una funcion memorizad y aca esta memo")
  return (
    <button
        className='btn btn-primary'
        onClick={()=>{
            increment(5);
        }}
    >
        Incrementar
    </button>
  )
})
