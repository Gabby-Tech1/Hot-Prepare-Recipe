import React, { useState } from 'react'
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { IoTimerOutline } from 'react-icons/io5';
import Modal from 'react-modal';
import {motion} from 'framer-motion'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(254, 215, 170, 1)',
    borderRadius: '10px',
    padding: '20px',
    overflow: 'auto',
    maxHeight: '80vh',
    minWidth: '400px', 
}
}

const Recipe = ({ meals }) => {
  const [showAll, setShowAll] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleShowAll = () => {
    setShowAll(true)
  }

  const handleCollapse = () => {
    setShowAll(false)
  }

  const handleOpenModal = (recipe) => {
    setSelectedRecipe(recipe)
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedRecipe(null)
    setModalIsOpen(false)
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const renderMeals = () => {
    if (filteredMeals.length === 0) {
      return (
        <div className='flex w-full justify-center items-center h-10'>
          <p className='text-2xl font-semibold text-gray-500'>No recipe found!</p>
        </div>
      )
    }

    let limitedMeals = filteredMeals
    if (!showAll) {
      const screenWidth = window.innerWidth
      if (screenWidth >= 1224) limitedMeals = limitedMeals.slice(0, 6)
      else if (screenWidth >= 768 && screenWidth < 1224) limitedMeals = limitedMeals.slice(0, 4)
      else if (screenWidth < 768) limitedMeals = limitedMeals.slice(0, 3)
    }
    return limitedMeals.map(item => {
      return (
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2, type:'', ease: 'easeIn'}}
          key={item.id} className='border p-4 shadow-xl hover:scale-105 duration-500 ease-in-out'>
          <img src={item.image} alt={item.name} title={item.name} className='w-full mb-2 object-cover h-64' />
          <div className=' text-lg font-semibold'>{item.name}</div>
          <div className='text-gray-500 space-x-2'>{item.cuisine}</div>
          <button className='text-white mt-7 rounded-full bg-orange-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold' onClick={() => handleOpenModal(item)}>
            Read More
          </button>
        </motion.div>
      )
    })
  }

  return (
    <div className='lg:my-2 py-14' id='recipe'>
      <div className='text-center px-6 md:px-12'>
        <h1 className='text-3xl font-bold tracking-wider'>Popular <span className='text-orange-500'>Recipes</span> You Can't Miss</h1>
        <p className='text-gray-500 px-4 sm:px-6 md:px-8 sm text-sm md:text-lg font-semibold'>Must-try recipe! Delicious, easy, and loved by all. Give it a try tonight! Bon appetit!</p>
      </div>

      <div className='flex justify-center my-10 gap-1 items-center'>
        <label htmlFor="" className='font-semibold text-lg sm:text-xl'>Search: </label>
        <input
          type='text'
          placeholder='Search recipes...'
          className='md:w-full md:max-w-md px-4 py-2 border rounded-3xl bg-white/75 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-10'>
          {renderMeals()}
        </div>

        {filteredMeals.length > 0 && (
        <>
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
                <FaAngleDoubleUp className=''/>
                <button className='' onClick={handleCollapse}>
                  Collapse
                </button>
              </div>
            </div>
          )}
        </>
      )}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} ariaHideApp={false} style={customStyles}>
        {selectedRecipe && (
          <div className='scroll-smooth'>
            <div className=''>
              <div className='text-center pt-6 px-6 md:px-12'>
                <h1 className='text-3xl font-bold tracking-wider'>{selectedRecipe.name}</h1>
              </div>

              <div className='flex justify-center mt-10'>
                <img src={selectedRecipe.image} alt={selectedRecipe.name} className='w-full max-w-lg object-cover' />
              </div>

              <div className='flex flex-col justify-between md:flex-row item-center md:gap-20 md:px-16'>
              <div className='mt-10 px-3 md:px-6'>
                <h2 className='text-xl font-semibold'>Ingredients:</h2>
                <ul className='list-disc ml-4'>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className='md:text-lg text-sm'>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 px-3 md:px-6'>
                <h2 className='text-xl font-semibold'>Tags:</h2>
                <ul className='list-disc ml-4'>
                  {selectedRecipe.tags.map((ingredient, index) => (
                    <li key={index} className='md:text-lg text-sm'>{ingredient}</li>
                  ))}
                </ul>
              </div>

              </div>

              <div className='mt-10 px-3 md:px-6'>
                <h2 className='text-xl font-semibold'>Instructions:</h2>
                <ol className='list-decimal ml-4'>
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className='md:text-lg text-sm'>{instruction}</li>
                  ))}
                </ol>
              </div>


              <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mt-10 px-3 md:px-6'>
                  <h2 className='text-xl font-semibold'>Cuisine:</h2>
                  <p>{selectedRecipe.cuisine}</p>
                </div>
                <div className='mt-10 px-3 md:px-6 flex flex-col items-center gap-1 '>
                  <div>
                    <p className='text-center'>Estimated Preparation Time:</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <IoTimerOutline className='font-bold text-2xl'/>
                    <p className='font-bold text-2xl'>{selectedRecipe.prepTimeMinutes}</p>
                  </div>
                </div>
                
              </div>
              <div className='flex justify-center mt-10'>
              <button className='text-white mt-7 rounded-full bg-orange-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold mb-4' onClick={handleCloseModal}>
              Close
              </button>
              </div>
              </div>

          </div>
            )}
        </Modal>
    </div>
    )
    }

export default Recipe;