import React from 'react'
// import Category1 from '../../assets/images/Earrings.jpg'
function CategoryCard({img,name}) {
  return (
    <>
      <div className="flex flex-col items-center gap-2 p-4 border-2 w-50 m-3 shadow-2xl rounded-2xl bg-white">
        <img className="rounded-xl object-cover w-50 h-50"src={img} alt="" />
        <p className="font">{name}</p>
      </div>
    </>
  )
}

export default CategoryCard
