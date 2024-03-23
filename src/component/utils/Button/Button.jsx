import React from 'react'

function Button({enabled, action, children}) {

  return (
    <button disabled={enabled} onClick={()=>{
      action();
      }} className='border border-gray-400 shadow-lg text-sm bg-white px-3 py-1'>
        {children}
    </button>
  )
}

export default Button