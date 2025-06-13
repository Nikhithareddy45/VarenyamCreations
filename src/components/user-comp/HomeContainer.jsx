import React from 'react'
import Slider from '../ui/Slider'
import { Button } from '../ui/button'
function HomeContainer() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className='font-logo leading-tight text-wrap text-center mt-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl pl-4 pr-4'>Exquisite Jewelry Collection</h1>
      <p className='font text-center m-3 text-md sm:text-lg md:text-lg lg:text-xl'>Handcrafted with Love❤️</p>
      <Slider/>
      <div className="buttons flex gap-3 mt-5  ">
        <Button className=" yellow pr-9 pl-9">Shop Now</Button>
        <Button className="maroon pr-9 pl-9">View Collections</Button>
      </div>
    </div>
  )
}

export default HomeContainer
