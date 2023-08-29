import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
    <img className='h-8 ' src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg" alt="menu" />
    <img className='h-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU" alt="Logo" />
    </div>
    <div className='col-span-10'>
      <input className='border-black border-2' type="text" />
      <button>Search</button>
    </div>
    <div className='col-span-1'>
      <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user"/>
    </div>
    </div>
  )
}

export default Head