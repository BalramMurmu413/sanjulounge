import React from 'react'
import image5 from '/Images/image5.jpg'
import image2 from '/Images/image2.jpg'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';


export default function Banner() {
  return (
    <>
                  <ScrollAnimation animateIn="fadeIn" duration={75}>
          <div className=' w-full flex flex-row justify-between h-full overflow-hidden border-2'>
              <div className=' h-96 w-1/2 relative'>
                  <div className=''>
                  <h1 className=' text-pink-400 text-xl md:text-3xl font-bold'>Makeup Expert</h1>
                  <img src={image5} alt="" className='' />
                  </div>
                </div>
              <div className='h-96 w-1/2'>
                  <div>
                  <h1 className=' text-pink-400 text-xl md:text-3xl font-bold'>Fashion Designer</h1>
                  <img src={image2} alt="" className='' />
  Some Text
</div>
</div>

      </div>
</ScrollAnimation>
    </>
  )
}
