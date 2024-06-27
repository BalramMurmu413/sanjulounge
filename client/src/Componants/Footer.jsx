import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Footer() {
  return (
    <>
        <ScrollAnimation animateIn="scroll" duration={5} className='w-full min-h-32 flex flex-col  text-pink-400 font-semibold  rounded-lg  border-2 bg-slate-100 shadow-xl'>
      
      <section className=' w-full grid md:flex grid-cols-2 my-10 items-center justify-items-center md:justify-around flex-wrap' >

        <div>
          <h1 className='text-sm md:text-xl font-bold text-pink-400'>Our Office</h1>
          <p>Nirsa Dhanbad</p>
          <p>Jharkhand India,</p>
          <p> 828204</p>
        </div>


        <div>
          <h1 className='text-sm md:text-xl font-bold text-pink-400'>Our Company</h1>
          <ul>
            <Link to='/contact'>
            <li >About Us</li>
            </Link>
            <Link to='/maintanancePage'>
            <li >Career</li>
            </Link>
            <Link to='/maintanancePage'>
            <li >External Links</li>
            </Link>
          </ul>
        </div>

        <div>
          <h1 className='text-sm md:text-xl font-bold text-pink-400'>Social Media </h1>
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
        <h1 className='text-sm md:text-xl font-bold text-pink-400'>Promises</h1>

          <ul className=' '>
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
          <Link to='https://api.whatsapp.com/send?phone=917979729392&text=You%20are%20chatting%20with%20Balram%20Murmu...How%20can%20I%20help%20you%20?' target='blank'>
        <p >Designed By Balram Murmu</p>
          </Link>
      </section>
      </ScrollAnimation>

    </>
  )
}
