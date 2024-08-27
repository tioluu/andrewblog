import React from 'react'
import './Navbar.css'
import mouthlogo from '../../assets/mouthlogo.png'


const Navbar = () => {
  return (
    <header>
      <div className='logo'>
        <img src={mouthlogo} alt=''/>
        <a href='' className='logo-text'>raMbleonAndrew</a>
      </div>
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