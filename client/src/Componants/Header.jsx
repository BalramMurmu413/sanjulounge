import React from 'react'
// import styled from 'styled-components';
import { useState } from 'react'
import BackgroundVideo from '/Images/video1.mp4'
import BackgroundImage from '/Images/image5.jpg'




import { MdOutlineMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';



export default function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className='w-full  bg-slate-100 mb-20 ' >
         <div className='w-full flex flex-row items-center justify-between' >
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
          
        <div className='lg:hidden block'>
          <nav className={`fixed transition-all duration-700 w-full block bg-slate-200 rounded-md h-screen ${ toggle ? "left-0" : " -left-full"}`}>
          <ul className='flex flex-col  gap-5 justify-between items-start mx-10 mt-10'>
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
</div>
      </section>
          
    </>
  )
}
