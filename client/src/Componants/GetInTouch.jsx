import React from 'react'

export default function GetInTouch() {
  return (
    <>
          <section className='bg-slate-100 md:w-1/2 m-auto min-w-72 min-h-72 flex items-center justify-center my-10'>
              <div>
                  <h2 className='md:text-2xl text-lg items-center font-semibold text-pink-400 flex flex-col '>Get In Touch</h2> <hr className='h-[10px] bg-pink-400 rounded-full w-1/2 m-auto border-2 mb-5' />
                  <form className='md:text-xl text-sm font-semibold flex flex-col '>
                    <input type="text" placeholder="Name" required className='text-pink-400 text-sm outline-none border rounded-md ' />
                    <input type="email" placeholder="Email" required  className='text-pink-400 text-sm outline-none border my-5 rounded-md '/>
                    <textarea placeholder="Message"  className='text-pink-400 text-sm outline-none border rounded-md '></textarea>
                    <button type="submit" onSubmit={()=>alert("We'll Contect You as soon as Possible")} className='py-2  px-2 bg-pink-200 text-pink-400 text-sm hover:bg-transparent border ' > Submit</button>
                  </form>
                  <p className='text-pink-400 text-lg'>We'll get back to you as soon as possible.</p>
              </div>
      </section>
    </>
  )
}
