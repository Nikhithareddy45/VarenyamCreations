import React from 'react'
import { Link } from 'react-router-dom'
function Menubar() {
  return (
    <ul className="flex mt-17 p-4 pl-10 gap-5 w-full flex-wrap maroon text-white">
        <li><Link to="#" className='font'>Necklaces</Link></li>
        <li><Link to="#" className='font'>Earrings</Link></li>
        <li><Link to="#" className='font'>Rings</Link></li>
        <li><Link to="#" className='font'>Chains</Link></li>
        <li><Link to="#" className='font'>Bangles</Link></li>
        <li><Link to="#" className='font'>Anklets</Link></li>
    </ul>
  )
}

export default Menubar
