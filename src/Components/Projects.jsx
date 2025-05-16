import React from 'react'
import JS from "../Images/Web-Developer.png"

function Projects() {
    const cardItem= [
        {
            id: 1,
            logo: JS,
            name: "Javascript",
        }
    ]
  return (
    <div name="Projects" className='text-white max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 my-20 mt-[400px] md:mt-[300px]'><br /><hr />
        <div>
            <h1 className='text-3xl font-bold mt-8'>Projects</h1><br />
            <span className='underline font-semibold'>Featured Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    cardItem.map(({id, logo, name})=>(
                        <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='px-2 font-bold text-lg mb-2'>{name}</div>
                                <p className='px-2 text-white-700'>its my project</p>
                            </div>
                            <div className='px-6 py-4 space-x-3 justify-around'>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div><br />
    </div>
  )
}

export default Projects
