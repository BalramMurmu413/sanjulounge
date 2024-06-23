import React from 'react'
// import styled from 'styled-components';
import { useState } from 'react'
import BackgroundVideo from '/Images/video1.mp4'




import { MdOutlineMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';



export default function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className='w-full min-h-72  '>
{/* <video src={BackgroundVideo} autoPlay loop muted className='fixed -z-10 w-full h-full bg-contain bg-top '> */}
{/* </video> */}
         <div className='w-full flex flex-row items-center justify-between'>
          <div>
            <Link to='/'>
           <h1 className=' text-xl md:text-3xl text-pink-400 font-bold '>Sanju Lounge</h1>
            </Link>
          </div>
<nav className='hidden md:block'>
  <ul className='flex flex-row items-center gap-5 justify-between'>
              <Link to='/'>
    <li className='text-pink-400 font-semibold cursor-pointer'>Home</li>
            </Link>
            <Link to='/service'>
    <li className='text-pink-400 font-semibold cursor-pointer'>Service</li>
            </Link>
            <Link to='/blog'>
    <li className='text-pink-400 font-semibold cursor-pointer'>Blog</li>
            </Link>
            <Link to='/contact'>
    <li className='text-pink-400 font-semibold cursor-pointer'>Contact</li>
    </Link>
  </ul>
</nav>
            
          <div className='md:hidden'>
          {
            toggle ?
            <IoCloseSharp onClick={()=> setToggle(!toggle)} className='h-10 w-10 text-pink-400 cursor-pointer'/>
            :
            <MdOutlineMenuOpen onClick={()=> setToggle(!toggle)} className='h-10 w-10 text-pink-400 cursor-pointer' />
          }
          </div>
          </div>
          
          {/* responsive menu */}

          <nav className={`fixed transition-all duration-700 w-full  bg-pink-300 rounded-md h-screen ${ toggle ? "left-0" : " -left-full"}`}>
          <ul className='flex flex-col  gap-5 justify-between items-start mx-10 mt-10'>
          <Link to='/'>
<li className='text-white font-semibold cursor-pointer'>Home</li>
            </Link>
            <Link to='/service'>
    <li className='text-white font-semibold cursor-pointer'>Service</li>
            </Link>
            <Link to='/blog'>
    <li className='text-white font-semibold cursor-pointer'>Blog</li>
            </Link>

            <Link to='/contact'>
    <li className='text-white font-semibold cursor-pointer'>Contact</li>
            </Link>
  </ul>
</nav>
      </section>
          
    </>
  )
}
