import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <header>
    <nav class="bg-black text-white text-sm py-2 border-b-white border-b-2 h-13">
        <div className='flex justify-center'>
          <ul className='flex gap-8'>
            <li>
              <NavLink to= "/" className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}`}>
              Home
              </NavLink>
              </li>


              <li>
              <NavLink to="/about" className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}`}>
              About
              </NavLink>
              </li>

              <li>
              <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}`}>
              Contact
              </NavLink>
              </li>


              <li>
              <NavLink to="/feedback" className={({isActive}) => `${isActive ? "text-gray-400" : "text-white"}`}>
              Feedback
              </NavLink>
              </li>
            
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header