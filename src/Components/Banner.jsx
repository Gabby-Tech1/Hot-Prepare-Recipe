import React from 'react'
import food from '../assets/banner.jpeg'

const Banner = () => {
  return (
    <div  className='min-h-[550px]  flex justify-center items-center py-12 '>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-orange-500'>
                <div className='p-6 sm:p-8 '>
                    <p data-aos="slide-right" className='text-sm'>Pastries</p>
                    <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-6xl font-bold '>Recipe is so delicious.</h1>
                    <p data-aos="fade-up" className='text-sm '>Yummy and Delicious</p>
                </div>
                <div data-aos="zoom-in" className='h-full flex items-center'>
                    <img src={food} alt="" className='scale-125 w-[250px] md:w-[300px] h-[250px] md:h-[300px] rounded-full mx-auto drop-shadow-2xl object-cover '/>
                </div>
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8 '>
                    <p data-aos="zoom-out" className='font-bold text-xl'>Learn to Cook Foreign Recipes</p>
                    <p data-aos="fade-up" className='text-3xl sm:text-5xl font-bold'>Easy Steps</p>
                    <p data-aos="fade-up" className='text-sm tracking-wide leading-5 '>Estimated Time</p>
                    <div data-aos="fade-up" data-aos-offset="0">
                        <button className='bg-white text-orange-500 hover:scale-110 duration-500 ease-linear font-semibold text-xl py-2 px-4 rounded-full '>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner