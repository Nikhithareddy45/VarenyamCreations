import React from 'react'
import ItemCard from '../ui/ItemCard'

function UserItems() {
  return (
    <div className='flex gap-3 m-auto w-[90%] flex-wrap items-center justify-center '>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
  )
}

export default UserItems
