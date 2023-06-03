// import React from 'react'

// const projects = () => {
  //   return (
    //    <>
    
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //         <Image className="rounded-t-lg" src='/download.png' alt="" width={300} height={300} />
    //     </a>
    //     <div className="p-5">
    //         <Link href="#">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    //         </Link>
    //         <div className="buttons">
    
    //         <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //             GitHub
    //             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //             </Link>
    
    //             <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //             liveLink
    //             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //         </Link>
    //         </div>
    //     </div>
    // </div>

//    </>
//   )
// }

// export default projects









import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
// import Button from 'next/button'

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
         
        {/* </Link> */}

      </div>
      </div>  
   </>
  )
}

export default projects