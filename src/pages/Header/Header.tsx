// import { useState } from 'react'
import './Header.css';

function Header() {

  return (
    <header className='header'>
      <h1>Portfolio</h1>
      <nav>
        <ul className='nav'>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
        </ul>
      </nav>
      <div className='link-outside'>
        <a href="#top">X</a>
        <a href="#top">github</a>
      </div>

    </header>
  )
}

export default Header
