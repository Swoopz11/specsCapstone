import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1 className='main-header'>A Good Distraction</h1>
        <div className='site-links'>
          <Link to="/home" >
            <button className='nav-btn'>Home</button>
          </Link>
          <Link to="/cat" >
            <button className='nav-btn'>Cat</button>
          </Link>
          <Link to="/dog" >
            <button className='nav-btn'>Dog</button>
          </Link>
        </div>
    </header>
  )
}

export default Header