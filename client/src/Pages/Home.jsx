import React from 'react'
import Header from '../Componants/Header.jsx'
import Footer from '../Componants/Footer.jsx'
import Banner from '../Componants/Banner.jsx'

export default function Home() {
  return (
    <>
      <Header/>
      <section className='w-full min-h-screen  '>
        <div>
        </div>
        <Banner/>
      </section>
      <Footer/>
    </>
  )
}
