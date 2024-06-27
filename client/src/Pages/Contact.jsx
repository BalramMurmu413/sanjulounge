import React from 'react'
import Header from '../Componants/Header.jsx'
import Footer from '../Componants/Footer.jsx'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoWechat } from "react-icons/io5";



export default function Contact() {
  return (
    <div>
            <Header/>

<section className='w-full min-h-60 m-0 items-center flex flex-col'>
  <div>
    <h1 className='font-extrabold text-xl md:text-4xl underline cursor-default text-pink-400'>Get in Touch</h1>
  </div>

  <div className='w-full min-h-64  my-10  flex flex-row items-center justify-around flex-wrap'>

    <div className='flex  w-48 h-32 duration-100 cursor-default rounded-lg my-5 text-pink-400 flex-col items-center justify-around  bg-slate-100 shadow-xl hover:scale-105'>
    <HiOutlineBuildingOffice2 className=' w-10 h-10'/>
<h1>Nirsa Dhanbad </h1>
<p>Jharkhand India</p>
    </div>



    
    <div className='flex  w-48 h-32 duration-100 cursor-default rounded-lg my-5 text-pink-400 flex-col items-center justify-around  bg-slate-100 shadow-xl hover:scale-105'>
    <IoLogoWechat className=' w-7 h-7'/>
<h1>Chat us with </h1>
<p>Our Chat bot AI</p>
    </div>



    <div className='flex  w-48 h-32 duration-100 cursor-default rounded-lg my-5 text-pink-400 flex-col items-center justify-around  bg-slate-100 shadow-xl hover:scale-105'>
    <FaPhoneAlt className=' w-7 h-7'/>
<h1>Call us on </h1>
<p>1800XXX -9392</p>
    </div>


    
    <div className='flex  w-48 h-32 duration-100 cursor-default rounded-lg my-5 text-pink-400 flex-col items-center justify-around  bg-slate-100 shadow-xl hover:scale-105'>
    <MdOutlineMail className=' w-7 h-7'/>
<h1>Mail us on  </h1>
<p>Balram@gmail.com</p>
    </div>


  </div>
</section>



  <Footer/>
    </div>
  )
}
