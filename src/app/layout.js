import './globals.css'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Header from './components/header'

import Projects from './components/projects'
import Techstack from './components/techstack'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Protfolio Next App',
  description: 'It is the proof of work and A type of virtual Resume',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className='bg-gradient-to-r from-violet-500 slate-100 to-fuchsia-500'>

        {children}
        <Navbar/>
        <Header />
        <Techstack/>
          <h1 className='text-2xl font-bold text-center mt-4 mb-4 '>My Projects</h1>
        <div className="projects-container flex gap-4 justify-center items-center  md:flex  flex-wrap">
        <Projects img="/shopify.png" title="ShopifyClone" GithubLink="https://github.com/jagadishthati/Shopify" LiveLink="https://shopify-iota.vercel.app/"/>
        <Projects img="/rode.png" title ="RodeClone" GithubLink="https://github.com/jagadishthati/rodeclone" LiveLink="https://rodeclone-six.vercel.app/"/>

        </div>
     <Contact/>
        </div>
        </body>
    </html>
  )
}
