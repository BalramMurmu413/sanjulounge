import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Footer() {
  return (
    <>
        <ScrollAnimation animateIn="scroll" duration={5} className='w-full min-h-32 flex flex-col  text-pink-400 font-semibold  rounded-lg  border-2 bg-slate-100 shadow-xl'>
      
      <section className=' w-full grid md:flex grid-cols-2 items-center justify-items-center md:justify-around flex-wrap' >

        <div>
          <h1 className='text-xl md:text-3xl font-bold text-pink-400'>Our Office</h1>
          <p>Nirsa Dhanbad</p>
          <p>Jharkhand India,</p>
          <p> 828204</p>
        </div>


        <div>
          <h1 className='text-xl md:text-3xl font-bold text-pink-400'>Our Company</h1>
          <ul>
            <Link to='/contact'>
            <li>About Us</li>
            </Link>
            <Link to='/maintanancePage'>
            <li>Career</li>
            </Link>
            <Link to='/maintanancePage'>
            <li>External Links</li>
            </Link>
          </ul>
        </div>

        <div>
          <h1 className='text-xl md:text-3xl font-bold text-pink-400'>Social Media </h1>
          <ul>
            <Link to='/contact'>
            <li>Facebook</li>
            </Link>
            <Link to='/maintanancePage'>
            <li>Instagram</li>
            </Link>
            <Link to='/maintanancePage'>
            <li>Youtube</li>
            </Link>
          </ul>
        </div>

        <div>
        <h1 className='text-xl md:text-3xl font-bold text-pink-400'>Promises</h1>

          <ul>
            <Link to='/maintanancePage'>
            <li>FAQ</li>
            </Link>
            <Link to='/maintanancePage'>
            <li>Term & Condition</li>
            </Link>
            <Link to='/maintanancePage'>
            <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </section>
      <section className='w-full min-h-10 flex items-center  justify-center'>
        <p >Designed By Balram Murmu</p>
      </section>
      </ScrollAnimation>

    </>
  )
}
