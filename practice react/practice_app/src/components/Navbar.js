import React from 'react'
import logo from '../logo.svg';

function Navbar() {
  return (
   <nav>
    <img src={logo} className='nav--icon'/>
    <h3 className='nav--logo_text'>ReacFacts</h3>
    <h4 className='nav--title'>React Coures-Project 1</h4>
   </nav>
  )
}

export default Navbar