import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className="navbar fixed-top  co1 py-4 text-danger">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center w-100">
    <Link className="navbar-brand text-white fs-3 fw-bold " to=''>START FRAMEWORK</Link>
    <div className=''>
      <ul className='list-unstyled d-flex gap-4'>
        <li>
          <NavLink className='text-decoration-none text-white fw-bold'  to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink className='text-decoration-none text-white fw-bold' to='/portfolio'>PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink className='text-decoration-none text-white fw-bold' to='/contact'>CONTACT</NavLink>
        </li>
      </ul>
    </div>



  </div>
  </div>
</nav>
    </>
  )
}
