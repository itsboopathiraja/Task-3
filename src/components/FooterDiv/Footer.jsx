import React from 'react'
import {AiFillInstagram}from 'react-icons/ai'
import {BsFacebook}from 'react-icons/bs'
import {AiOutlineTwitter}from 'react-icons/ai'


const Footer= () => {
  return(
   <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8]  grid grid-cols-5 m-autom items-center'>

      <div>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-white pb-[2rem]'>
            <strong>Job</strong>Search
        </h1>
      </div>
      <p className='text-white pb-[13px] opacity-70 leading-7' >
        we always makes our seekers and Companies find the best jobs  and employers find the best canditates
      </p>
    </div>

    <div className='grid'>
      <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>company
      </span>
      <div className='grid gap-3'>

        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>About Us</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Featurest</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>News</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>FAQ</h1>
      

      </div>
    </div>

    <div className='grid'>
      <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Resources
      </span>
      <div className='grid gap-3'>

        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Account</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Support Center</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Feedback</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Contact</h1>
      

      </div>
    </div>

    <div className='grid'>
      <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>Support
      </span>
      <div className='grid gap-3'>

        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Events</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Promo</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Req Demo</h1>
        <h1 className='text-white opacity-[.7] hover:opacity-[1] hover:cursor-pointer'>Carrers</h1>
      

      </div>
    </div>





    


     <div className='grid'>
      <span className='divTittle text-[18px] font-semibold pb-p[1.5rem] text-white'>contact info</span>
      <div>
        <small className='text-[14px] text-white'>
          ratech@gmailcom
        </small>
        <div className='icons flex gap-4 py-[1rem]'>
        <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
        <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>  
        <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>

        </div>
      </div>

     </div>
    
    </div>

    
  )
}

export default Footer