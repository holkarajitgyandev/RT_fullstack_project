import React from 'react'
const add_to_watchlist=()=>{
    
}
const Button = () => {
  return (
    <div>
      <button onClick={add_to_watchlist} className='flex items-center justify-center gap-2 border border-black rounded-md'>
              <CiCirclePlus size={20} /> WATCHLIST
            </button>
    </div>
  )
}

export default Button
