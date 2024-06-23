import React from 'react'
import image5 from '/Images/image2.jpg'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';


export default function BannerTwo() {
  return (
    <>
                  <ScrollAnimation animateIn="fadeIn" duration={1} className=' shadow-xl my-20 '>

          <div className='flex w-full flex-col md:flex-row m-auto bg-slate-100 rounded-lg justify-between'>
              <div className='flex min-h-64 m-auto  flex-col items-center justify-around'>

              <div>

<div className=' rounded-xl m-auto w-full'>
  <img src={image5}  className='rounded-lg' />
    </div>
</div>
</div>
<div className='w-full min-h-64 flex flex-col justify-around'>
              <div>
              <h1 className=' text-pink-400  text-xl mx-4 md:text-3xl  font-bold'>Makeup Expert</h1>
              <p className='text-pink-400 text-sm  font-bold mx-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, optio.</p>
              </div>
                 <div className='flex justify-around w-full'>
              <button className='py-2 px-4 text-pink-400 border-pink-400 border-2 hover:bg-pink-400 hover:text-white rounded-full'>Explore</button>
              <button className='py-2 px-4 text-pink-400 border-pink-400 border-2 hover:bg-pink-400 hover:text-white rounded-full'>Let's Talk</button>
              </div>
            </div>   
          </div>
         
          </ScrollAnimation>
    </>
  )
}
