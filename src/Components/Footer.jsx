import React from 'react'
import Whatsapp from '../assets/Whatsapp.png'
import Email from '../assets/Email.png'
import GitHub from '../assets/GitHub.png'
import LinkedIn from '../assets/LinkedIn.png'

const Footer = () => {
  return (
    <footer className='bg-orange-500 text-white text-center py-4'>
      <div className='container mx-auto px-4'>
        <div className='text-3xl font-bold'>Hot Prepare Recipe</div>
        <p className='text-center text-gray-200 pb-2'>Made by Gabby Tech</p>
        <div className='flex justify-center space-x-4'>
          <a href='https://wa.me/+233591071237' target='_blank' rel='noopener noreferrer'>
            <img src={Whatsapp} alt='WhatsApp' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
          <a href='https://github.com/Gabby-Tech1' target='_blank' rel='noopener noreferrer'>
            <img src={GitHub} alt='GitHub' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
          <a href='mailto:gkaquainoo@gmail.com'>
            <img src={Email} alt='Email' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
          <a href='https://www.linkedin.com/in/gabriel-kwame-addo-quainoo-3b0960297/' target='_blank' rel='noopener noreferrer'>
            <img src={LinkedIn} alt='LinkedIn' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
        </div>
        <div className='text-sm pt-4'>Copyright © 2024. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer