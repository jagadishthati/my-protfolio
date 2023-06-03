import Image from 'next/image'
import React from 'react'

const projects = ({img,title,GithubLink,LiveLink}) => {
  return (
   <>
    <div className='card bg-slate-700 p-3 flex flex-col justify-center items-centers '>
      <div className="cardImage  bg-emerald-200 p-4">
        <Image className="img" src={img} width={300} height={300} alt='img'/>
      </div>
      <div className="cardBody text-2xl font-bold text-white">
        {title}
      </div>
      <div className="cardButtons flex gap-4">
          <a href={GithubLink} target='_blank'>

          <button className="button bg-teal-500 p-2  rounded-lg  text-white">
            GitHub
          </button>
          </a>
        <a href={LiveLink} target='_blank'>
                  <button className="button bg-teal-500 p-2  rounded-lg  text-white">
                    liveLink
                  </button>
                </a>  
         
   

      </div>
      </div>  
   </>
  )
}

export default projects