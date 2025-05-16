import React from 'react'
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";


function Footer() {
  return (
    
    <>
      <hr />
      <footer className='py-12'>
        <div className='text-white max-w-screen-2xl mt-[0px] container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <a href="https://www.facebook.com" target='_blank' className='cursor-pointer'><FaFacebook size={24}/></a>
                    <a href="https://www.linkedin.com/in/satyabrat-sahoo-developer/" target='_blank' className='cursor-pointer'><FaLinkedin size={24}/></a>
                    {/* <FaSquareXTwitter size={24}/> */}
                    <a href="https://x.com/satya_sahoo_05" target='_blank' className='cursor-pointer'><FaTelegram size={24}/></a>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; 2024 Your Company, All right reserved.</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
