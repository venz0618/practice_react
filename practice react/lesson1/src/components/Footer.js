import React from 'react'
import {GrTwitter} from 'react-icons/gr';
import {FaFacebookF, FaInstagramSquare, FaGithub} from 'react-icons/fa';
function Footer() {
  return (
    <div className='footer'>
      <i className='twitter'><GrTwitter/></i>
      <i className='fb'><FaFacebookF/></i>
      <i className='insta'><FaInstagramSquare/></i>
      <i className='git'><FaGithub/></i>
    </div>
  )
}

export default Footer