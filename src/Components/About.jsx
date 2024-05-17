import React from 'react'
import companyLogo from '../assets/logo.png'
import Team from '../assets/team.jpeg'
import Values from '../assets/values.jpeg'
import Mission from '../assets/mission.jpeg'

const About = () => {
  return (
    <div className='lg:my-2 py-14' id='about'>
      <div className='text-center px-6 md:px-12'>
        <h1 className='text-3xl md:text-5xl font-bold tracking-wide'>About <span className='text-orange-500'>HotPrepare.</span></h1>
        <p className='text-gray-500 px-4 sm:px-6 md:px-8 sm text-sm md:text-lg font-semibold'>Learn more about our recipe company and our mission!</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:gap-20 mt-10 px-10'>
        <div className='flex flex-col items-center md:w-1/2'>
          <img src={companyLogo} alt='HotPrepare.' className='w-48 md:w-64 mb-6' />
          <h2 className='text-xl font-semibold'>Our Story</h2>
          <p className='text-gray-500 text-sm md:text-lg'>HotPrepare. is a recipe company that specializes in creating delicious and easy-to-follow recipes. Our mission is to provide high-quality, healthy, and affordable meals to our customers.</p>
        </div>

        <div className='flex flex-col items-center md:w-1/2'>
          <img src={Team} alt='Our Team' className='w-48 md:w-64 mb-6' />
          <h2 className='text-xl font-semibold'>Our Team</h2>
          <p className='text-gray-500 text-sm md:text-lg'>Our team is dedicated to bringing you the best recipes and experiences. We strive to create a welcoming and supportive environment for our customers.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center md:gap-20 mt-10 px-10'>
        <div className='flex flex-col items-center md:w-1/2'>
          <img src={Mission} alt='Our Mission' className='w-48 md:w-64 mb-6' />
          <h2 className='text-xl font-semibold'>Our Mission</h2>
          <p className='text-gray-500 text-sm md:text-lg'>Our mission is to provide high-quality, healthy, and affordable meals to our customers. We strive to create delicious and easy-to-follow recipes that cater to everyone's dietary needs and preferences.</p>
        </div>

        <div className='flex flex-col items-center md:w-1/2'>
          <img src={Values} alt='Our Values' className='w-48 md:w-52 mb-6' />
          <h2 className='text-xl font-semibold'>Our Values</h2>
          <p className='text-gray-500 text-sm md:text-lg'>Our values are centered around providing excellent customer service, creating delicious and healthy meals, and supporting local businesses. We strive to create a welcoming and supportive environment for our customers.</p>
        </div>
      </div>
    </div>
  )
}

export default About