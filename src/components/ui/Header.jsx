import React from 'react'
import headerImg from '../../assets/images/header-img.png'
function Header({header,para}) {
  return (
    <div className='flex flex-col items-center justify-center mt-5 p-5 w-[80%] lg:w-[60%]'>
        <img src={headerImg} className="lg:h-15 md:h-12 sm:h-10 h-9" alt="header-image"  />
      <h3 className='font-logo leading-tight text-wrap text-center mt-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl pl-4 pr-4'>{header}</h3>
      <p className='font text-center mt-3 sm:w-[90%] md:w-[60%] lg:w-[70%]'>{para}</p>
    </div>
  )
}


export default Header
