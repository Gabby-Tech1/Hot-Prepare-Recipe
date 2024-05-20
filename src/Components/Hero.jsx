import React from 'react'
import hero from '../assets/hero.png'
import { HashLink as Link } from 'react-router-hash-link'
import {easeIn, motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='mb-12 lg:mb-0' id='hero'>
        <div className='lg:h-[90vh] flex items-center justify-between flex-col-reverse lg:flex-row px-8 lg:px-16 gap-12'>
            <div className='flex flex-col gap-6'>
                <motion.h1
                 initial={{x: -600, opacity: 0}}
                 animate={{x: 0, opacity: 1}}
                 transition={{duration: 2, type: 'spring', ease: 'easeIn'}}
                 className='md:text-5xl text-3xl font-bold'>
                    Cook Like A Pro with Our <span className='text-orange-500'>Easy</span> and <span className='text-orange-500'>Tasty</span> Recipes
                </motion.h1>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 5, type: 'spring', ease: 'easeIn'}}
                    className='text-gray-600 italic font-medium'>
                    Dive into our treasury of delectable recipes crafted with passion and care. Join us as we embark on a culinary adventure where every recipe tells a story and every bite is a celebration of life's delicious moments. Let's create magic in the kitchen together and savor the joy of cooking!
                </motion.p>
                <Link to="#recipe" smooth >
                    <motion.button
                    initial={{y: 300, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 3, when: 'afterChildren', type: 'spring'}}
                    className='bg-orange-500 w-fit px-10 py-2 lg:mt-4 rounded-3xl text-white font-medium tracking-wide hover:scale-110 duration-500 ease-linear'>
                        Our Offers
                    </motion.button>
                </Link>
            </div>

            <div>
                <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}} 
                    transition={{duration: 1.5, type: 'tween', ease: 'easeInOut'}}
                    src={hero} alt="" className='lg:w-[1070px] '/>
            </div>
        </div>
    </div>
  )
}

export default Hero