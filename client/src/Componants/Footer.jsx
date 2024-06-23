import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <section>

        <div>
          
        </div>

        <div>

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
    </>
  )
}
