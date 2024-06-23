import React from 'react'
import { Link } from 'react-router-dom'

export default function MaintanancePage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1>Sorry! This Page is Under Maintanance</h1>
          <Link to='/'>
      <button className='border-2 py-2 px-4 bg-slate-600 text-pink-400'>Go Back</button>
          </Link>
    </div>
  )
}
