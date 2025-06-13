import React from 'react'
import CategoryCard from '../ui/CategoryCard'
import Category1 from '../../assets/images/Earrings.jpg'
import Category2 from '../../assets/images/rings.jpg'
import Category3 from '../../assets/images/Chain.jpg'
import Category4 from '../../assets/images/Necklace-set.jpg'
import Category5 from '../../assets/images/bangles.jpg'
import Category6 from '../../assets/images/Anklets.jpg'
import {Link} from 'react-router-dom'
function CategoriesSection() {
  return (
    <>
      <div className="flex items-center flex-wrap justify-center gap-4 w-[95%] m-auto">
            <Link to="#"><CategoryCard img={Category1} name="Ear Rings"/></Link>
            <Link to="#"><CategoryCard img={Category2} name="Rings"/></Link>
            <Link to="#"><CategoryCard img={Category3} name="Chains"/></Link>
            <Link to="#"><CategoryCard img={Category4} name="Necklace Set"/></Link>
            <Link to="#"><CategoryCard img={Category5} name="Bangles"/></Link>
            <Link to="#"><CategoryCard img={Category6} name="Anklets"/></Link>
      </div>
    </>
  )
}

export default CategoriesSection
