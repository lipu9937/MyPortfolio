import React from 'react'
import pic from '../../public/profile.png'
import resume from '../../public/Resume.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";

import { ReactTyped } from "react-typed";


function Home() {
  return(
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 my-20'>
        <div className=' text-white bg-gray-800 flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-10 md:mt-12 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome to my Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hi, I am </h1>
                {/* <span className='text-blue-700 font-bold'>Developer</span> */}
                <ReactTyped
                    className='text-blue-700 font-bold'
                    strings={["Developer", "Programmer", "Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                />
            </div><br/>
            <p className='text-sm md:text-md text-justify'>Hello I'm Satyabrat Sahoo, {/*a passionate MCA graduate from KIIT University,*/} from Jajpur of Odisha.
              I know C++, Oops, Frontend development and Database.
              <br/><br/>Developed these skills through hands-on experience, having built multiple projects
              that showcase my proficiency in the Web technology.
              <br/><br/>🌟 Passionate about pushing the boundaries to deliver high-quality results. I'm constantly exploring new technologies and best practices
              to stay ahead of the curve.I'm always excited to collaborate on new projects and contribute my expertise to meaningful ventures.
              If you're looking for a skilled Web developer who is committed to excellence.
            </p><br/>
            {/*social media */}
            <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
             <div className='space-y-2'>
                <h1 className='font-bold'>Available On</h1>
                <ul className='flex space-x-4'>
                    <li className='text-2xl cursor-pointer'><a href="https://www.facebook.com" target='_blank'><FaFacebook /></a></li>
                    <li className='text-2xl cursor-pointer'><a href="https://www.linkedin.com/in/satyabrat-sahoo-developer/" target='_blank'><FaLinkedin /></a></li>
                    <li className='text-2xl cursor-pointer'><a href="https://x.com/satya_sahoo_05" target='_blank'><FaSquareXTwitter /></a></li>
                    <li className='text-2xl cursor-pointer'><FaTelegram /></li>
                </ul>
             </div>
             <div className='space-y-2'>
                <h1>Currently Working On</h1>
                <ul className='flex space-x-4'>
                    <li className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl] cursor-pointer'><IoLogoJavascript /></li>
                    <li className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl] cursor-pointer'><GrReactjs /></li>
                    <li className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2pxl] cursor-pointer'></li>
                </ul>
             </div>
            </div>
        </div>
        <div className='md:w-1/2 mt-8 md:ml-40 md:mt-16 order-1'>
            <img src={pic} className='border-2 hover:scale-105 duration-300 rounded-2xl h-500px' alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Home
