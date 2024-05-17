import React from 'react'
import { useState } from 'react'
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import logo from '../assets/logo.png'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="" className='w-9 mr-1'/>
                    <span className="text-2xl font-bold tracking-wide">HotPrepare.</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 font-medium text-lg">
                    <li className=' hover:text-orange-500 duration-300 ease-in'><Link to="#" smooth>Home</Link></li>
                    <li className=' hover:text-orange-500 duration-300 ease-in'><Link to="#recipe" smooth>Recipes</Link></li>
                    <li className=' hover:text-orange-500 duration-300 ease-in'><Link to="#about" smooth>About Us</Link></li>
                </ul>
                <div className="hidden lg:flex font-medium text-white text-xl justify-center items-center bg-orange-500 rounded-3xl hover:scale-110 duration-500 ease-linear">
                    <FaPhoneVolume className='ml-3'/>
                    <Link to="#contact" smooth className='py-1 px-2'>
                    Get In Touch
                    </Link>
                </div>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-2xl font-bold' /> : <CgMenu className='text-2xl font-bold' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-orange-200 bg-opacity-70">
                    <ul className='font-semibold text-lg'>
                        <li className=' hover:text-orange-500 duration-300 ease-in py-3 text-center'><Link to="#" smooth>Home</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-orange-500 duration-300 ease-in py-3 text-center'><Link to="#recipe" smooth>Recipes</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-orange-500 duration-300 ease-in py-3 text-center'><Link to="#about" smooth>About Us</Link></li> <hr className='w-60'/>
                    </ul>
                    <div className="flex items-center bg-orange-500 rounded-2xl mt-2 hover:scale-110 duration-500 ease-linear text-lg font-medium text-white">
                        <FaPhoneVolume className='ml-3'/>
                        <Link to="#contact" smooth className='py-1 px-3'>
                            Get In Touch
                        </Link>

                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar