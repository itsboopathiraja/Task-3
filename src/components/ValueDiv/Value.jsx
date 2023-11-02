import React from 'react'


const Value = () => {
  return(
    <div className='mb-[4rem] [mt-6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb[3rem] font-bold w-[400px]block '>The value that holds us true and to account</h1> 

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#f1f8f8f3] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px rounded-[.8rem] bg-[#d6d6e67e] h-[40px] w-[40px] flex items-center justify-center'>
              <img src="https://i.pinimg.com/originals/f4/cf/ec/f4cfec4f3b4bbf24798b26aa4a5508f2.png" alt="" 
              className='w-[70%]' />
              </div>

              <span className='font-semibold text-textColor textt-[18px]'>Simplicity
              </span>

            </div>
            <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do

            </p>
          </div>
          <div className='singleGrid rounded-[10px] hover:bg-[#a1e9c7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px rounded-[.8rem] bg-[#33b95e] h-[40px] w-[40px] flex items-center justify-center'>
              <img src="https://th.bing.com/th/id/OIP.foOkmoA5K4lnHXrvHpfBhwAAAA?pid=ImgDet&w=120&h=120&c=7" alt="" 
              className='w-[70%]' />
              </div>

              <span className='font-semibold text-textColor textt-[18px]'>Simplicity
              </span>

            </div>
            <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do

            </p>
          </div>
          <div className='singleGrid rounded-[10px] hover:bg-[#eec7e6] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px rounded-[.8rem] bg-[#fd4ac7] h-[40px] w-[40px] flex items-center justify-center'>
              <img src="https://th.bing.com/th/id/OIP.sLrI10lMNVOIrbAmZ2ezpgHaE8?pid=ImgDet&rs=1" alt="" 
              className='w-[70%]' />
              </div>

              <span className='font-semibold text-textColor textt-[18px]'>Simplicity
              </span>

            </div>
            <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do

            </p>
          </div>
        </div>
        <div className='"card mt-[2rem] flex justify-between bg-greyIsh p-[5rem] rounded-[10px]'>

        
        <div>
        <h1 className='text-blueColor text-[30px] font-bold'>
          Ready to switch a carrer 
        </h1>
        <h2 className='text-textColor text-[25px] font-bold'>Let's get started</h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[40px] w-[10%] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started 
        </button>
        </div>

      </div>
  )
}

export default Value