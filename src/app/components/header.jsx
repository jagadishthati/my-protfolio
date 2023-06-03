import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <>
      <div className="hero-section md:flex  flex flex-wrap justify-center items-center gap-4 md:mt-20">
      <div className='biodata flex flex-col gap-2'>
         <h1 className=' text-xl  color-white font-extrabold '>
        Hello, I&apos;m Thati Jagadish 🖐 
         </h1>
         <h1 className='text-lg font-bold'>FrontEnd Developer React</h1>
       
      </div>

        <div className="img ">
            <Image  className="  hover:border-4 h-[35vh] border-white-500     hover:rounded-full" src="/Profile.png" alt="" height={400} width={300} />
        </div>
      
      
    </div>
    
    </>
  )
}

export default header