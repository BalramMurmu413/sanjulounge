import React from 'react'
import Header from '../Componants/Header.jsx'
import Footer from '../Componants/Footer.jsx'
import Banner from '../Componants/Banner.jsx'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import BannerTwo from '../Componants/BannerTwo.jsx'
import HighLightBanner from  '../Componants/HighLightBanner.jsx'

export default function Home() {
  return (
    <>
        <ScrollAnimation animateIn="fadeIn" duration={1}>
      
        <Header />
        </ScrollAnimation>
      <section className='w-full min-h-screen  '>
        <div>
        <HighLightBanner/>
        <Banner/>
        <BannerTwo/>
        </div>
      </section>
      <Footer/>
    </>
  )
}
