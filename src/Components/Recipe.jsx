import React, { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";


const Recipe = ({ meals }) => {
  const [showAll, setShowAll] = useState(false)

  const handleShowAll = () => {
    setShowAll(true)
  }

  const handleCollapse = () => {
    setShowAll(false)
  }

  const renderMeals = () => {
    let limitedMeals = meals
    if (!showAll) {
      const screenWidth = window.innerWidth
      if (screenWidth >= 1224) limitedMeals = meals.slice(0, 6)
      else if (screenWidth >= 768 && screenWidth < 1224) limitedMeals = meals.slice(0, 4)
      else if (screenWidth < 768) limitedMeals = meals.slice(0, 3)
    }

    return limitedMeals.map(item => {
      return (
        <div key={item.id} className='border p-4 shadow-xl hover:scale-105 duration-500 ease-in-out'>
          <img src={item.image} alt={item.name} title={item.name} className='w-full mb-2 object-cover h-64' />
          <div className=' text-lg font-semibold'>{item.name}</div>
          <div className='text-gray-500 space-x-2'>{item.cuisine}</div>
          <button className='text-white mt-7 rounded-full bg-orange-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold'>Read More</button>
        </div>
      )
    })
  }

  return (
    <div className='lg:my-2 sm:my-12'>
      <div className='text-center px-6 md:px-12'>
        <h1 className='text-3xl font-bold tracking-wider'>Popular <span className='text-orange-500'>Recipes</span> You Can't Miss</h1>
        <p className='text-gray-500 px-4 sm:px-6 md:px-8 sm text-sm md:text-lg font-semibold'>Must-try recipe! Delicious, easy, and loved by all. Give it a try tonight! Bon appetit!</p>
      </div>

      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-10'>
          {renderMeals()}
        </div>

        {!showAll && (
          <div className=' w-52 mx-auto cursor-pointer mt-10'>
            <div className='flex gap-2 items-center justify-center hover:text-orange-500 text-xl duration-300 ease-linear'>
              <FaAngleDoubleDown className=''/>
              <button className='' onClick={handleShowAll}>
                Show All Recipes
              </button>
            </div>
          </div>
          
        )}

        {showAll && (
          <div className=' w-52 mx-auto cursor-pointer mt-10'>
          <div className='flex gap-2 items-center justify-center hover:text-orange-500 text-xl duration-300 ease-linear'>
            <FaAngleDoubleDown className=''/>
            <button className='' onClick={handleCollapse}>
              Collapse
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Recipe