import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
      <header>
        <a href='' className='logo'>raMble</a>
        <div className='abc'>

          <span>About</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <nav>
          <a href=''>Login</a>
          <a href=''>Sign up</a>
        </nav>

      </header>
  )
}

export default Navbar