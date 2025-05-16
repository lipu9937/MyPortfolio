import React from 'react'
import Cpp from '../Images/C++.png'
import CSS from '../Images/CSS.png'
import javascript from '../Images/javascript.png'
import Html from '../Images/HTML.png'
import react from '../Images/react.png'
import tailwind from '../Images/tailwind.png'
import python from '../Images/python-pic.png'

function Experience() {
    const cardItem= [
        {
            id: 1,
            logo: Html,
            name: "HTML",
        },
        {
            id: 2,
            logo: CSS,
            name: "CSS",
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 4,
            logo: Cpp,
            name: "C++",
        },
        {
            id: 5,
            logo: react,
            name: "ReactJS",
        },
        {
            id: 6,
            logo: tailwind,
            name: "Tailwind CSS",
        },
        {
            id: 7,
            logo: python,
            name: "Python"
        },
    ]
  return (
    <div name="Experience" className='text-white max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 my-20 mt-[390px]'><br />
        <div>
            <h1 className='text-3xl font-bold mt-8'>Experience</h1><br />
            {/* <span className='underline font-semibold'>Featured Project</span> */}
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-3'>
                {
                    cardItem.map(({id, logo, name})=>(
                        <div className='flex flex-col items-center justify-center border-[2px] md:w-[200px] md:h-[200px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[150px] p-1 rounded-full' />
                            <div>
                                <div className=''>{name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience
