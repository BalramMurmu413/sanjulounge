import React from 'react'
import image5 from '/Images/image5.jpg'


export default function HighLightBanner() {
  return (
    <>
          <main>
              <section className='w-full min-h-48 my-10 flex flex-col md:flex-row place-content-center '>
                  <div className='w-1/2 border place-content-center justify-center '>
                      <h1 className='text-2xl font-bold md:text-4xl my-3 text-pink-400'>Professional Makeup by <br /><span className='text-5xl'> Kanika </span></h1>
                      <p  className='text-lg font-normal md:text-xl my-3 text-pink-400'>I am the most Professional makeup artise  <br /> at Nirsa Dhanbad Jharkhand and have 2 years + <br /> makeup experience in Fine Arts & Fashion world.... </p>
                      <button  className='text-lg font-bold md:text-xl py-2 px-4 hover:bg-pink-400 text-pink-400 border hover:text-white rounded-lg duration-300 transition hover:ease-in-out  '>-Explore More-</button>
            </div>
                  <div className='w-1/2 border-2 place-items-center  '>
                      <img src={image5} alt="" />
            </div>

            <div className='w-1/2 border place-content-center justify-center '>
                      <h1 className='text-2xl font-bold md:text-4xl my-3 text-pink-400'>Professional Makeup by <br /><span className='text-5xl'> Kanika </span></h1>
                      <p  className='text-lg font-normal md:text-xl my-3 text-pink-400'>I am the most Professional makeup artise  <br /> at Nirsa Dhanbad Jharkhand and have 2 years + <br /> makeup experience in Fine Arts & Fashion world.... </p>
                      <button  className='text-lg font-bold md:text-xl py-2 px-4 hover:bg-pink-400 text-pink-400 border hover:text-white rounded-lg duration-300 transition hover:ease-in-out  '>-Explore More-</button>
            </div>
                  <div className='w-1/2 border-2 place-items-center  '>
                      <img src={image5} alt="" />
            </div>
              </section>
      </main>
    </>
  )
}
