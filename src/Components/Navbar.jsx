import React, { useState } from 'react'
import pic from '../../public/profile.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import {Link} from 'react-scroll'

function Navbar() {
  const [menu, setMenu]= useState(false)
  const navItems= [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 1,
      text: "About",
    },
    // {
    //   id: 1,
    //   text: "Projects",
    // },
    {
      id: 1,
      text: "Experience",
    },
    {
      id: 1,
      text: "Contact",
    },
  ]
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 text-white bg-gray-800'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-14 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                  Satyabrat <span className='text-blue-500 text-2xl'>Sahoo</span>
                  <p className='text-lg'>Frontend Developer</p>
                </h1>
                
            </div>
            <div>
              {/* navbar for desktop */}
                <ul className='hidden md:flex space-x-8'>
                    {
                      navItems.map(({id, text})=>(
                        <li className='hover:scale-110 duration-200 cursor-pointer' key={id}>
                          <Link
                          to={text}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass='active'
                          >
                          {text}
                          </Link>
                        </li>
                      ))
                    }
                </ul>
                <div onClick={()=> setMenu(!menu)} className='md:hidden'>
                {menu?<IoClose size={24}/>:<AiOutlineMenu size={24}/> }
                </div>
            </div>
        </div>

        {menu && (
            <div className='bg-white'>
          {/* navbar for mobile */}
          <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-2xl '>
              {
                navItems.map(({id, text})=>(
                  <li className='hover:scale-110 duration-200 cursor-pointer font-semibold' key={id}>
                    <Link
                          onClick={()=> setMenu(!menu)}
                          to={text}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass='active'
                          >
                          {text}
                          </Link>
                  </li>
                ))
              }
          </ul>
        </div>
          )}
        
      </div>
    </>
  )
}

export default Navbar
