import React from 'react'
import Button from './Button'

const List=["All","Computer Programming","Arjit Singh","Ed Sheeran","Mantras","Cricket","News","Live"]
const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Computer Programming"/>
      <Button name="Arjit Singh"/>
      <Button name="Ed Sheeran"/>
      <Button name="Mantras"/>
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Live"/>
    </div>
  )
}

export default Buttonlist;