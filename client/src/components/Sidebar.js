import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen)
  return null;
  return ( 
    <div className='w-36 p-5 shadow-lg'>
      <ul>
        <li>Home </li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>
      <h1 className='pt-5'></h1>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
    )
  
}

export default Sidebar