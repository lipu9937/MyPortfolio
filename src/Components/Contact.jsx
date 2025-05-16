import React, { useInsertionEffect } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

let c=12;

function Contact() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo= {
        name: data.name,
        email: data.email,
        mwssage: data.message,
    }
    try {
        await axios.post("https://getform.io/f/anlejjla", userInfo)
        toast.success("Your Message has been sent")
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
    }
  }
  return (
    <>
        <div name="Contact" className='text-white max-w-screen-2xl mt-[700px] md:mt-[530px] my-8 container mx-auto px-4 md:px-20'>
            <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
            <span className='underline'>Please fill out the below form to contact me</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form
                onSubmit={handleSubmit(onSubmit)} 
                // action="https://getform.io/f/anlejjla" 
                // method='POST' 
                className='bg-slate-300 w-90 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl text-gray-700 font-semibold mb-4'>Send your message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Full Name: 
                        </label>
                        <input 
                        {...register("name", { required: true })} 
                        id='name' 
                        name='name' 
                        placeholder='Enter your full name' 
                        type="text" 
                        className='shadow border rounded-lg py-2 px-3 text-gray-700 focus:outline-none 
                        focus:shadow-outline' />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Email Aaddress: 
                        </label>
                        <input 
                        {...register("email", { required: true })} 
                        id='name' 
                        name='email' 
                        placeholder='Enter your Email Address' 
                        type="text" 
                        className='shadow border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' 
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700'>
                            Message: 
                        </label>
                        <textarea
                        {...register("message", { required: true })}  
                        id='message' 
                        name='message' 
                        placeholder='Type your message here' 
                        type="text" 
                        className='shadow border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline' 
                        />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                </form>
            </div>
        </div> 
    </>
  )
}

export default Contact
