import React from 'react'
import styled from 'styled-components';
import { useState } from 'react'
import video from '/Images/video1.mp4'



import { MdOutlineMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";



export default function Header() {
  const [toggle, setToggle] = useState(false)
  const Title = styled.h1`
  font-size: 2.5em;
  font-family: 'Italianno';
`;
  return (
    <>
      <section className='w-full h-screen bg-slate-400'>
        <div className='w-full relative flex justify-between h-1/2'>
          <div className='absolute'>
            <video src={video}></video>
          </div>
          <Title className=' text-xl md:text-3xl text-pink-400 font-bold '>Sanju Lounge</Title>

            
          <div className='md:hidden'>
          {
            toggle ?
            <MdOutlineMenuOpen onClick={()=> setToggle(!toggle)} className='h-10 w-10 text-pink-400 cursor-pointer' />
            :
            <IoCloseSharp onClick={()=> setToggle(!toggle)} className='h-10 w-10 text-pink-400 cursor-pointer'/>
          }
          </div>
          
          
        </div>
      </section>
    </>
  )
}
