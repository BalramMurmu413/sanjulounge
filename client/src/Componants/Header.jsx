import React from 'react'
// import styled from 'styled-components';
import { ReactTyped } from "react-typed";
import { useState } from 'react'
import BackgroundVideo from '/Images/video1.mp4'
import BackgroundImage from '/Images/image8.jpg'




import { MdOutlineMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';



export default function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className='w-full  mb-20 min-h-96 bg-no-repeat -z-10 shadow-xl rounded-lg  h-full '
      // style={{backgroundImage: `url(${BackgroundImage}) `, backgroundPositionX:"center", backgroundOrigin:"content-box", backgroundSize:"cover", backgroundPosition:"center" }}  
      >
         <div className='w-full flex flex-row items-center justify-between ' >
          <div>
            <Link to='/'>
           <h1 id='logo' className=' text-2xl md:text-4xl text-pink-400 font-bold '>Sanju Lounge</h1>
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
            <IoCloseSharp onClick={()=> setToggle(!toggle)} className='h-9 w-9 text-pink-400 cursor-pointer'/>
            :
            <MdOutlineMenuOpen onClick={()=> setToggle(!toggle)} className='h-9 w-9 text-pink-400 cursor-pointer' />
          }
          </div>
        </div>
        

        <section className='w-full min-h-72 flex place-content-center items-center'>
        <ReactTyped  className="sm:text-2xl md:hidden  font-bold text-pink-400 "
      
      strings={[
        "  Fashion Designing",
        " Western Makeover",
        " Skin Care ",
        "Hair Care ",
      ]}
      typeSpeed={80}
      backSpeed={40}
      loop={true}
/>
        </section>
          
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
