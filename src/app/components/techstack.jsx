// "use client"
import React from 'react'
import Image from 'next/image'
const techstack = () => {
  return (
    <div className='techIcons flex flex-col justify-center items-center w-full gap-2 text-xl mt-4 mb-4 '>
        <div className="heading text-2xl font-bold">

      TechStack
        </div>
    <div className="images flex gap-4 md:flex  flex-wrap">
           <Image src="/html-5.png" width={0} height={0} sizes="100vw"
  style={{ width: '15vh', height: 'auto' }}  alt='html'></Image>
           <Image src="/css-3.png"width={0} height={0} sizes="100vw"
  style={{ width: '15vh', height: 'auto' }} alt='Css'></Image>
           <Image src="/java-script.png"width={0} height={0} sizes="100vw"
  style={{ width: '15vh', height: 'auto' }} alt='javascript'></Image>
           <Image src="/physics.png"width={0} height={0} sizes="100vw"
  style={{ width: '15vh', height: 'auto' }} alt='react'></Image>
           <Image src="/next.svg"width={0} height={0} sizes="100vw"
  style={{ width: '15vh', height: 'auto' }} alt='nextjs'></Image>

    </div>
    </div>
  )
}

export default techstack