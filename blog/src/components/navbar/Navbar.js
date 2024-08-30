import React from 'react'
import './Navbar.css'
import mouthlogo from '../../assets/mouthlogo.png'


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navbar-brand'>
        <img src={mouthlogo} alt=''/>
        <a href='' className='logo-text'>raMbleonAndrew</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar