import React from 'react'

const Recipe = ({ meals }) => {
  return (
    <div className='lg:my-4 sm:my-12'>
        <div className='text-center px-12'>
            <h1 className='text-3xl font-bold tracking-wider'>Popular <span className='text-orange-500'>Recipes</span> You Can't Miss</h1>
            <p className='text-gray-500 text-lg font-semibold'>Must-try recipe! Delicious, easy, and loved by all. Give it a try tonight! Bon appetit!</p>
        </div>

        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-10'>
            {meals.map(item => {
                return (
                    <div key={item.id} className='border p-4 shadow-xl hover:scale-105 duration-500 ease-in-out'>
                        <img src={item.image} alt={item.name} title={item.name} className='w-full mb-2 object-cover h-60' />
                        <div className=' text-lg font-semibold'>{item.name}</div>
                        <div className='text-gray-500 space-x-2'>{item.cuisine}</div>
                        <button className='text-white mt-7 rounded-full bg-orange-500 py-2 px-4 hover:scale-110 duration-300 ease-linear font-semibold'>Read More</button>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Recipe