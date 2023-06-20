import React from 'react'
import { FiUser } from 'react-icons/fi'
import { AiFillCaretDown } from 'react-icons/ai'
import clock from '../assets/clock.gif'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-screen h-auto px-10 py-3 border-black bg-slate-200 shadow-md fixed top-0 z-10 flex flex-row justify-between items-center'>
            <div className='hidden md:flex gap-10 text-md font-semibold text-gray-700'>
                <div className='flex flex-row gap-2'>
                <img src={clock} alt="" className='w-6 '/>   
                  <Link to={"/landing"}>Explore</Link></div>
                <div> <Link to={'/create'}>Upload</Link></div>
                <div>MyBlogs</div>
                <div>About</div>
            </div>
            <div>

            </div>
            <div className='flex items-center gap-3 border-gray-200 hover:cursor-pointer bg-gray-200 rounded-md p-1'>
                <FiUser size={20} />
                <span>Jayesh Malviya</span>
                <AiFillCaretDown />
            </div>
        </div>
    )
}

export default Navbar